'use strict';

var react = require('react');
var reactDom = require('react-dom');

const Portal= ({ children }) => {
   const [mounted, setMounted] = react.useState(false);

   react.useEffect(() => {
      setMounted(true);
      return () => setMounted(false)
   }, []);

   return mounted
      ? reactDom.createPortal(children, 
        document.querySelector("body"))
      : null
};

module.exports = Portal;
