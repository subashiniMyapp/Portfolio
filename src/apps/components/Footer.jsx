export function Footer() {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    return(
        <footer>
            <p className=" bg-footer text-center py-7 text-footercolor">
                &copy; {currentYear}-{nextYear}, Subashini.All rights reserved.
            </p> 
        </footer>
    )
}