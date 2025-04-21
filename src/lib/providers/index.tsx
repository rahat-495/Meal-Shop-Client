const Providers = ({children}: {children: React.ReactNode}) => {
    console.log('%cproviders, 2', 'color: red; font-weight: bold;',
    "Logging Providers"
    );
    
    return (
            {children}
    );
};

export default Providers;