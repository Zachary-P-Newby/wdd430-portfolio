export default function Footer() {
    return (
        <footer className="bg-blue-500 text-white p-4 text-center">
            <div className="container mx-auto">
                <p>Copyright &copy; { new Date().getFullYear()} Zach Newby. All rights reserved. Whether you like it or not.</p>
            </div>
        </footer>
    );
}