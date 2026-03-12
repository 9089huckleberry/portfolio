"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Mail, User, Calendar, Inbox } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function DashboardMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) setMessages(data);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-foreground">Messages</h1>
        <p className="text-sm text-muted-foreground">
          Contact form submissions from your portfolio
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
        </div>
      ) : messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] py-20">
          <Inbox className="mb-4 h-12 w-12 text-muted-foreground" />
          <p className="font-semibold text-foreground">No messages yet</p>
          <p className="text-sm text-muted-foreground">
            Messages from your contact form will appear here once Supabase is configured.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-sm font-bold text-brand-400">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                      <User className="h-3.5 w-3.5" />
                      {msg.name}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      {msg.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {formatDate(msg.created_at)}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{msg.message}</p>
              <div className="mt-3">
                <a
                  href={`mailto:${msg.email}?subject=Re: Your message&body=Hi ${msg.name},`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500/10 px-3 py-1.5 text-xs font-medium text-brand-400 transition-colors hover:bg-brand-500/20"
                >
                  <Mail className="h-3 w-3" />
                  Reply via Email
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
