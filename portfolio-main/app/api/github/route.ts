import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/users/9089huckleberry", {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/users/9089huckleberry/repos?per_page=100", {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((acc: number, r: { stargazers_count: number }) => acc + (r.stargazers_count || 0), 0)
      : 0;

    return NextResponse.json({
      public_repos: user.public_repos ?? 0,
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      total_stars: totalStars,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch GitHub stats" }, { status: 500 });
  }
}
