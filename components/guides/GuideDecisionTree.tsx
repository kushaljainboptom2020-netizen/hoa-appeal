"use client";

import { useState } from "react";
import type { GuideDecisionTree } from "@/lib/content/guides/types";

type GuideDecisionTreeProps = {
  tree: GuideDecisionTree;
};

export function GuideDecisionTreeView({ tree }: GuideDecisionTreeProps) {
  const byId = new Map(tree.nodes.map((node) => [node.id, node]));
  const [nodeId, setNodeId] = useState(tree.startId);
  const [result, setResult] = useState<string | null>(null);
  const node = byId.get(nodeId);

  function reset() {
    setNodeId(tree.startId);
    setResult(null);
  }

  return (
    <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900/40 p-5">
      <p className="text-sm leading-relaxed text-slate-400">{tree.intro}</p>

      {result ? (
        <div className="mt-5 space-y-4">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
            Recommended next step
          </p>
          <p className="text-sm leading-relaxed text-slate-200">{result}</p>
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
          >
            Start over
          </button>
        </div>
      ) : node ? (
        <div className="mt-5 space-y-4">
          <p className="font-medium text-white">{node.prompt}</p>
          <ul className="space-y-2">
            {node.options.map((option) => (
              <li key={option.label}>
                <button
                  type="button"
                  onClick={() => {
                    if (option.result) {
                      setResult(option.result);
                      return;
                    }
                    if (option.nextId) setNodeId(option.nextId);
                  }}
                  className="w-full rounded-md border border-slate-700 bg-slate-950/60 px-4 py-3 text-left text-sm text-slate-200 transition-colors hover:border-emerald-600/50 hover:text-white"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
          {nodeId !== tree.startId ? (
            <button
              type="button"
              onClick={reset}
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Reset path
            </button>
          ) : null}
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-400">Decision path unavailable.</p>
      )}
    </div>
  );
}
