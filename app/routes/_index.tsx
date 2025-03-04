import type { MetaFunction } from "@remix-run/node";
import * as TITLE from './_lib/constant.title';
import { Link } from "@remix-run/react";
import { BookmarkIcon, ChartBarIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE.SITE_TITLE },
    { name: "description", content: TITLE.SITE_TITLE },
  ];
};

export default function Index() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-2 gap-2">
        <Link to='/' className="flex items-center gap-1 px-3 py-6 break-all rounded-lg border border-[#f5f7ff] transition hover:shadow-md">
          <ChartBarIcon className="text-orange-400 size-6 shrink-0"/>
          <strong>음원 순위</strong>
        </Link>
        <Link to='/' className="flex items-center gap-1 px-3 py-6 break-all rounded-lg border border-[#f5f7ff] transition hover:shadow-md">
          <BookmarkIcon className="text-orange-400 size-6 shrink-0"/>
          <strong>스밍/투표 가이드</strong>
        </Link>
        <Link to='/' className="flex items-center col-span-2 gap-1 px-3 py-6 break-all rounded-lg border border-[#f5f7ff] transition hover:shadow-md">
          <ChatBubbleBottomCenterIcon className="text-orange-400 size-6 shrink-0"/>
          <strong>헬퍼 지원</strong>
        </Link>
      </div>
    </div>
  );
}
