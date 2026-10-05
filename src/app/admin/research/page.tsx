import React from 'react';
import { prisma } from '@/lib/prisma';
import { BookOpen, Plus, FileText, Download, Calendar, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminResearchPage() {
  const papers = await prisma.researchPaper.findMany({
    orderBy: { publicationDate: 'desc' },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Research & Whitepapers Management</h2>
          <p className="text-xs text-slate-500">
            Maintain EVAR research publications, mathematical alignment briefs, and biometric datasets.
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors flex items-center space-x-1.5 self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span>Publish New Whitepaper</span>
        </button>
      </div>

      <div className="space-y-4">
        {papers.map((paper) => (
          <div key={paper.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                  {paper.category}
                </span>
                <span className="text-[11px] text-slate-400">
                  {new Date(paper.publicationDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
                <span className="text-[11px] text-slate-400">&bull; {paper.readTime}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{paper.title}</h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{paper.abstract}</p>
              <div className="text-[11px] text-slate-400 font-mono mt-1">Authors: {paper.authors}</div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold">
                Edit Paper
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold">
                Unpublish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
