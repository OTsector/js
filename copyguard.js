//Will block: ctrl+s ctrl+u ctrl+c. You can find more keycodes in google.
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 17 || 
             e.keyCode === 79 || 
             e.keyCode === 83 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
