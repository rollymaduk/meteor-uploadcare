loadUploadcare = function (ver) {
  ver=ver || "2.5.5";
  var config = {};
  /*var callback = _.noop;*/
  if (UploadcareSettings.publicSettings()) {
    config = UploadcareSettings.publicSettings();
  }
  var firstArg = [].shift.apply(arguments);
  if (typeof(firstArg) === "object") {
    config = _.extend(config, firstArg);
    callback = [].pop.apply(arguments);

  }
  else if (typeof(firstArg) === "function") {
    callback = firstArg;

  }


  if (this.uploadcare === undefined) {
    var key = config.key;
    if (key) {
      // Functions to run after the script tag has loaded
      var uploadcareLoadCallback = function () {
        window.UPLOADCARE_PUBLIC_KEY = key;
        window.UPLOADCARE_LIVE=false;

        if (callback && typeof(callback) == "function")
          callback();
        };

        // If the script doesn't load
        var uploadcareErrorCallback = function (error) {
          if (console !== undefined) {
            console.log(error);
          }
        };

        // Generate a script tag
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//ucarecdn.com/widget/"+ver+"/uploadcare/uploadcare-"+ver+".min.js";
        script.onload = uploadcareLoadCallback;
        script.onerror = uploadcareErrorCallback;

        // Load the script tag
        document.getElementsByTagName("head")[0].appendChild(script);

      } else {
        if (console !== undefined) {
          console.log("uploadcare - tried to load but key (Meteor.settings.public.uploadcare.key) not supplied");
        }
      }
    }
  };
