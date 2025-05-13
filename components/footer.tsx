export function Footer() {
  return (
    <footer className="w-full px-6 py-4 mt-24">
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy
          </a>
          <span className="text-gray-600">|</span>
          <a href="/terms" className="hover:text-gray-300 transition-colors">
            Terms
          </a>
        </div>
        <div>Made with 🍺, 🍟 and ❤️ in Belgium</div>
      </div>
    </footer>
  )
}
