import React from 'react'

function Footer() {
    const getYear = () => {
        let date = new Date();
        return date.getFullYear()
    }
    return (
    <footer className=" bg-dark py-5 text-white text-center mt-5">
      <p>&copy; <span className="text-info">EASY</span>CRM {getYear()}. All Rights Reserved.</p>
    </footer>
    )
}

export default Footer
