"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-xl glass border border-white/10 text-white/50 text-sm hover:text-white transition"
    >
      Logout
    </button>
  );
}
