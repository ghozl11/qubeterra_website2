const graduates = [
  'Aly Mahmoud',
  'Amr Abdelfattah Saad',
  'Jana Ahmed Farahat Hassan',
  'Mariam Amro Ahmed Fathi Seifeldin',
  'Nada Amr',
  'Nada Salah',
  'Nariman Mahmoud Eldaldy',
  'Omar Mohamed',
  'Salma Mohamed Ghonim',
  'Youssef Ahmed Mostafa Kamal',
  'Youssef Yasser Abdelkader',
  'Abdullrahman Tarek Salah',
  'Abdulrahman AlShenawi Abduljawad',
  'Ahmed Wael Mohamed',
  'Arsany Hany',
  'Merna Samir Wesa',
  'Ola Ahmed',
  'Omar Mohamed Mowena',
  'Ziyad Tarek',
  'Hana Ben Ali',
  'Omar Mohamed Elemary',
  'Abdelrahman Ahmed Sobhy Mohamed',
  'Abdelrahman Osheba',
  'Ahmed Ashraf Ahmed',
  'Ahmed Ibrahim Hussien Eisa',
  'Aya Khaled Farouk',
  'Aya Tamer Ginidy',
  'Fatema Al Zahraa El Refai',
  'Heba Adel Ali',
  'Karen Alber Farid',
  'Kerlos Melad Hana',
  'Mohammed Kamal',
  'Nada Ahmed Hamoda Ali',
  'Nour Hesham Hassan',
  'Tasneem Ahmed',
  'Yassmin Salah Eldin Adel',
  'Zeyad Mahmoud',
  'Abdelrahman Ezzeldin Ismail',
  'Abdelrahman Farouk',
  'Adham Wageh Elshouny',
  'Ahmed Ahmed Mostafa',
  'Doaa Mostafa',
  'Engy Mahmoud Mohamed',
  'Eslam Mohamed Ahmed Elabud',
  'Hatem Tamer',
  'Hazem Nabil Alieldin',
  'Marwan Mohammad Ammar',
  'Moataz Ashraf Mohamed Hendy',
  'Mohamed Ibrahim Attya Almorshedy',
  'Nada Maher',
  'Nour Salah',
  'Omar Ezzat Fayad',
  'RUBA MOHAMED MAHMOUD MOHAMED',
  'Tarek Wael',
  'Yara Hazem Hassan Hussien',
  'Alaa Soudy Ibrahim Ibrahim',
];

export default function NextGenGraduates() {
  return (
    <main className="relative min-h-screen overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-5">Qubeterra NextGen AI Fellowship · 2026</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">Successful Graduates</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-lunar-silver/75 sm:text-lg">Celebrating the fellows who completed the Qubeterra NextGen AI Fellowship in 2026.</p>
        </header>
        <section className="relative mt-16 overflow-hidden rounded-3xl border border-quantum-blue/50 bg-[#06142d]/90 p-6 shadow-[0_0_60px_rgba(0,174,239,0.12)] sm:p-10 lg:p-14" aria-label="2026 fellowship graduates">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-quantum-blue/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cosmic-purple/10 blur-3xl" />
          <div className="relative grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {graduates.map((name, index) => <div key={`${name}-${index}`} className="flex items-start gap-3 text-sm leading-6 text-white/90 sm:text-base"><span className="mt-1 text-quantum-blue" aria-hidden="true">◆</span><span>{name}</span></div>)}
          </div>
        </section>
      </div>
    </main>
  );
}
