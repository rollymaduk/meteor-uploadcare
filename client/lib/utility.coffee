@uploader_utils={
  installWidgetPreviewMultiple:(widget)->
    list=$("._img-viewer")
    list.empty();
    widget.onChange (fileGroup)->
      if (fileGroup)
        $.when.apply(null, fileGroup.files()).done(()->
          $.each(arguments,(i, fileInfo)->
            src = fileInfo.cdnUrl + '-/scale_crop/160x160/center/'
            list.append($('<div/>', {'class': '_item'}).append([$('<img/>', {src: src}), fileInfo.name]))
            return
          )
          return
        )
      return
    return

  installWidgetPreviewSingle:(widget)->
    img=$("._img-viewer")
    img.css('visibility','hidden')
    img.attr('src','')
    widget.onChange((file)->
      if (file)
        file.done (fileInfo)->
          debugger
          size = "#{(img.width() * 2)}x#{(img.height() * 2)}"
          previewUrl = "#{fileInfo.cdnUrl}-/scale_crop/#{size}/center/"
          img.attr('src', previewUrl)
          img.css('visibility','visible')
          return
        return
    )
    return




}