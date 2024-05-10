'use server';
import { redirect } from 'next/navigation'

export async function logout() {
    try {
      cookies().delete("AuthCookieTracking");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
    redirect("/");
  }