import { useContext } from "react";

import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            {theme === 'dark' ? (
                <FaSun
                    onClick={() => setTheme('light')}
                    className="text-gray-500 text-2xl cursor-pointer"
                />
            ) : (
                <FaMoon
                    onClick={() => setTheme('dark')}
                    className="text-gray-500 text-2xl cursor-pointer"
                />
            )}
        </div>
    );
};

export default Toggle;