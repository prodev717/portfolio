export default function Footer() {
  return (
    <footer className="w-full bg-[rgb(20,30,50)] text-gray-400 py-6 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ganesh M. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
