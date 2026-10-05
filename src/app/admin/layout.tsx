import React from 'react';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminLayout from '@/components/admin/admin-layout';

export const dynamic = 'force-dynamic';

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <AdminLayout
      userRole={session.role}
      userName={session.name}
      userEmail={session.email}
    >
      {children}
    </AdminLayout>
  );
}
