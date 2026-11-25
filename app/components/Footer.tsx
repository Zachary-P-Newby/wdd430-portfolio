export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white p-4 text-center">
            <div className="container mx-auto">
                <p>Copyright &copy; 2026 Zach Newby. All rights reserved. Whether you like it or not.</p>
            </div>
        </footer>
    );
}
//<p>Copyright &copy; { new Date().getFullYear()} Zach Newby. All rights reserved. Whether you like it or not.</p>
//This brought up the error: Error: Route "/": Next.js encountered the unstable value `new Date()` while prerendering.
//so I just replaced it with the year 2026.