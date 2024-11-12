export const Button = ({ children, theme, className, href, target }) => {
    const baseClasse = " ";
    const rel = "noopener noreferrer"
    const themeClasses =
      theme === "primary"
        ? "bg-pri-a-2 text-pri-a-1 font-bold hover:bg-pri-a-1 hover:text-pri-a-2"
        : theme === "secondary"
        ? "bg-pri-a-1 text-pri-a-2 font-bold hover:bg-pri-a-2 hover:text-pri-a-1"
        : ""
        ? " text-pri-a-1 font-bold bg-gradient-to-r from-pri-a-2 to-pri-c-1" 
        : theme === "thirdary";
  
    const renderButton = () => (
      <button
        className={`button py-3 px-3 lg:py-4 lg:px-6 rounded-lg ${themeClasses} ${baseClasse} ${className}`}
      >
        {children}
      </button>
    );
  
    const renderLink = () => (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`button inline-block py-3 px-3 lg:py-4 lg:px-6 rounded-lg no-underline ${themeClasses} ${baseClasse} ${className}`}
      >
        {children}
      </a>
    );
    return href ? renderLink() : renderButton();
  };