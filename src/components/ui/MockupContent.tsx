export default function MockupContent() {
  return (
    <div className="p-4 grid grid-cols-2 gap-3">
      {/* Payment Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-300 dark:border-zinc-800">
        <h3 className="text-zinc-900 dark:text-white font-semibold text-sm mb-1">Payment Method</h3>
        <p className="text-zinc-500 text-[10px] mb-3">All transactions are secure and encrypted</p>
        <div className="space-y-2.5">
          <div>
            <label className="text-zinc-500 dark:text-zinc-400 text-[10px] mb-1 block">Name on Card</label>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-300 text-xs">John Doe</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-zinc-500 dark:text-zinc-400 text-[10px] mb-1 block">Card Number</label>
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-300 text-xs">•••• 3456</div>
            </div>
            <div>
              <label className="text-zinc-500 dark:text-zinc-400 text-[10px] mb-1 block">CVV</label>
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-300 text-xs">•••</div>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <div className="w-3.5 h-3.5 rounded bg-blue-500 flex items-center justify-center">
              <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-zinc-700 dark:text-zinc-300 text-[10px]">Same as shipping address</span>
          </div>
        </div>
      </div>

      {/* Team Members Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-300 dark:border-zinc-800 flex flex-col items-center justify-center text-center">
        <div className="flex -space-x-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white dark:border-zinc-900" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white dark:border-zinc-900" />
        </div>
        <h3 className="text-zinc-900 dark:text-white font-semibold text-sm">No Team Members</h3>
        <p className="text-zinc-500 text-[10px] mt-1 mb-3">Invite your team to collaborate</p>
        <button className="px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white text-[10px] flex items-center gap-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Invite Members
        </button>
      </div>

      {/* Settings Panel */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-300 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          <span className="text-zinc-900 dark:text-white text-xs">Two-factor authentication</span>
          <button className="px-2.5 py-1 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-md text-[10px] font-medium">Enable</button>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-zinc-700 dark:text-zinc-300 text-[10px]">Your profile has been verified.</span>
          </div>
          <svg className="w-3 h-3 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Status Badges & Input */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-300 dark:border-zinc-800 space-y-3">
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Syncing
          </span>
          <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> Updating
          </span>
          <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Loading
          </span>
        </div>
        <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-2">
          <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-[10px] text-zinc-500 flex-1">Send a message...</span>
          <svg className="w-3.5 h-3.5 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        </div>
      </div>

      {/* Compute Environment */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-300 dark:border-zinc-800 col-span-2">
        <h3 className="text-zinc-900 dark:text-white font-semibold text-sm mb-1">Compute Environment</h3>
        <p className="text-zinc-500 text-[10px] mb-3">Select the compute environment for your cluster.</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3 border-2 border-blue-500 relative">
            <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-blue-500" />
            <h4 className="text-zinc-900 dark:text-white text-xs font-medium">Kubernetes</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-[9px] mt-0.5">Run GPU workloads on a K8s configured cluster.</p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-3 border border-zinc-300 dark:border-zinc-700">
            <h4 className="text-zinc-500 dark:text-zinc-400 text-xs font-medium">Virtual Machine</h4>
            <p className="text-zinc-400 dark:text-zinc-500 text-[9px] mt-0.5">Access a VM configured cluster. (Coming soon)</p>
          </div>
        </div>
      </div>

      {/* Survey Question */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-zinc-300 dark:border-zinc-800 col-span-2">
        <h3 className="text-zinc-900 dark:text-white font-semibold text-sm mb-1">How did you hear about us?</h3>
        <p className="text-zinc-500 text-[10px] mb-3">Select the option that best describes how you found us.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/50 text-emerald-600 dark:text-emerald-400 rounded-lg text-[10px] flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center">
              <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Social Media
          </span>
          <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-[10px]">Search Engine</span>
          <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-[10px]">Referral</span>
          <span className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-[10px]">Other</span>
        </div>
      </div>
    </div>
  );
}
