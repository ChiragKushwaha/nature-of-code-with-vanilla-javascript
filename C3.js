(function () {
  window.C3 = {};

  C3.export = function (mod) {
    C3[mod.name] = mod;
  };

  C3.import = function (path) {
    const script = document.createElement("script");
    script.src = path;
    script.type = "text/javascript";
    script.defer = true;
    document.body.appendChild(script);
  };

  return C3;
})();
