export function HeroPreviewBox() {
  return (
    <div className="mt-8 max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
      <div className="py-4 text-white font-semibold text-sm border-b border-gray-700">
        Placeholder Preview
      </div>
      <div className="p-8 text-gray-400 text-center text-sm">
        🧠 Mockup Preview Goes Here
        <span className="text-xs mt-2 block opacity-60">
          Visual preview of the current tool (scrollable tabs coming soon)
        </span>
      </div>
    </div>
  )
}
