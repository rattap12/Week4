
export function ContactPage() {
  return `
    <div class="min-h-screen bg-slate-50">

      <header class="bg-white border-b px-6 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <h1 class="text-xl font-bold text-sky-700">
            My Contact
          </h1>

        </div>
      </header>

      <main class="max-w-7xl mx-auto px-6 py-10">

        <section class="rounded-3xl bg-gradient-to-r
                        from-sky-800 to-blue-600
                        p-8 md:p-14 text-white shadow-xl">

          <h2 class="text-3xl md:text-5xl font-bold">
            ยินดีต้อนรับ
          </h2>

          <p class="mt-4 text-sky-100 text-lg">
            ระบบบริหารจัดการข้อมูล
            ใช้งานง่าย สะดวก และรวดเร็วทันใจ
          </p>

          <a href="#/home"
             class="inline-block mt-8 rounded-xl
                    bg-white px-7 py-3
                    font-bold text-sky-800
                    hover:bg-sky-100 transition">
            ไปหน้าหลัก →
          </a>
        </section>
    </div>
  `
}
