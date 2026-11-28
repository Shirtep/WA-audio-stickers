// Internacionalización (es / en) compartida entre el panel en WhatsApp Web y la página de registro.
(() => {
  const WAAS = (window.WAAS = window.WAAS || {});
  const LANG_KEY = "waas-lang";
  const SUPPORTED = ["es", "en"];

  const STRINGS = {
    es: {
      // Encabezado y panel
      "app.title": "Stickers con sonido",
      "app.subtitle": "Versión {version} · todo se procesa en tu navegador · máximo 1 MB por sticker",
      "app.kofi": "☕ Apoyar",
      "app.kofiTitle": "La extensión es gratis. Si te sirve, puedes apoyar el proyecto en Ko-fi.",
      "app.close": "Cerrar",
      "app.langTitle": "Cambiar idioma",

      // Pestañas
      "tab.video": "Video",
      "tab.video.desc": "Un video con su propio sonido: se recorta el tramo y la imagen y el audio van juntos.",
      "tab.image": "Imagen + audio",
      "tab.image.desc": "Una imagen fija con el sonido que elijas. El sticker dura lo que dure el tramo de audio.",
      "tab.mix": "Video o GIF + audio",
      "tab.mix.desc": "Una animación (video sin su sonido, o un GIF) con el audio que elijas.",

      // Secciones
      "sec.video": "Video",
      "sec.trim": "Tramo",
      "sec.image": "Imagen",
      "sec.audio": "Audio",
      "sec.animation": "Animación",
      "sec.format": "Formato",
      "sec.createSend": "Crear y enviar",

      // Trimmer
      "trim.startHandle": "Inicio del tramo (arrastra)",
      "trim.endHandle": "Fin del tramo (arrastra)",
      "trim.trackTitle": "Haz clic o arrastra para moverte",
      "trim.playSeg": "▶ Tramo",
      "trim.playCur": "▶ Desde el cursor",
      "trim.playEnd": "▶ Final del tramo",
      "trim.useCursor": "⤓ cursor",
      "trim.useCursorStart": "Usar la posición del cursor como inicio",
      "trim.useCursorEnd": "Usar la posición del cursor como fin",
      "trim.start": "Inicio",
      "trim.end": "Fin",
      "trim.prevFrame": "Un cuadro antes",
      "trim.nextFrame": "Un cuadro después",
      "trim.cursor": "cursor {time}",
      "trim.duration": "duración {time}",
      "trim.hintVideo": "Arrastra las asas verdes: el video muestra el cuadro donde quedan. Haz clic o arrastra en la barra para mover el cursor.",
      "trim.hintAudio": "Elige de dónde a dónde suena. Arrastra las asas o escribe los segundos.",
      "trim.hintMixVideo": "Elige el tramo de la animación. El sonido de este video no se usa.",

      // Recorte de video
      "crop.label": "Recorte",
      "crop.off": "Sin recorte",
      "crop.free": "Libre",
      "crop.square": "1:1",
      "crop.reset": "Restablecer",
      "crop.hint": "Arrastra el recuadro o sus esquinas sobre el video.",

      // Selectores de archivo
      "pick.video": "Elegir video…",
      "pick.videoHint": "Cualquier video con sonido.",
      "pick.image": "Elegir imagen…",
      "pick.imageHint": "JPG, PNG, WebP… (una foto, un dibujo, un meme).",
      "pick.audio": "Elegir audio…",
      "pick.audioHint": "MP3, M4A, OGG, WAV… o un video del que tomar el sonido.",
      "pick.mix": "Elegir video o GIF…",
      "pick.mixHint": "Un video (su sonido se ignora) o un GIF animado.",
      "pick.reading": "Leyendo {name}…",
      "pick.readErr": "No se pudo leer: {msg}",
      "pick.useErr": "No se pudo usar: {msg}",
      "pick.noSound": " · parece no tener sonido",
      "pick.gifInfo": "{name} · {dur} · {frames} cuadros · {w}×{h} · se usa completo",
      "pick.animNote": "Es una imagen animada: aquí solo se usa su primer cuadro. Para que se mueva, usa la pestaña «Video o GIF + audio».",
      "pick.staticGifErr": "es una imagen fija. Usa la pestaña «Imagen + audio».",
      "pick.chosenImageAlt": "imagen elegida",
      "pick.chosenGifAlt": "GIF elegido",
      "mix.decimalSep": ",",
      "pick.chosenImageAlt": "imagen elegida",
      "pick.chosenGifAlt": "GIF elegido",
      "mix.decimalSep": ",",

      // Mezcla (Video/GIF + audio)
      "mix.fitLabel": "Si duran distinto",
      "mix.fitIndependent": "Que cada uno dure lo suyo",
      "mix.fitRepeat": "Repetir la animación hasta que termine el audio",
      "mix.fitFreeze": "Dejar quieto el último cuadro hasta que termine el audio",
      "mix.needBoth": "Elige la animación y el audio para ver cuánto durará el sticker.",
      "mix.sameDur": "Animación y audio duran lo mismo: {dur}.",
      "mix.summaryHead": "Animación {v} · audio {a}. ",
      "mix.summaryIndep": "Cada uno conserva su duración: al tocar el sticker, la animación y el audio empiezan juntos y terminan por separado. Cambiar el audio no obliga a recalcular las opciones.",
      "mix.summaryCut": "La animación es más larga: se corta a {a}.",
      "mix.summaryRepeat": "El sticker dura {a}: la animación se repite {n} veces.",
      "mix.summaryFreeze": "El sticker dura {a}: la animación se detiene en su último cuadro a los {v}.",
      "mix.testTogether": "▶ Probar juntos",
      "mix.previewHint": "Vista previa: la animación se reproduce una vez, como en WhatsApp.",

      // Formato y tabla
      "fmt.frame": "Encuadre",
      "fmt.fit": "Ajustar (bordes transparentes)",
      "fmt.crop": "Recortar (llenar el cuadro)",
      "fmt.calc": "Calcular opciones",
      "fmt.calcHint": "Lee el tramo una vez y estima el peso de cada combinación.",
      "fmt.stale": "Algo cambió: vuelve a calcular las opciones.",
      "fmt.legendOk": "cabe",
      "fmt.legendLow": "cabe bajando la calidad",
      "fmt.legendNo": "✕ supera 1 MB (WhatsApp lo rechaza)",
      "fmt.legendRec": "★ recomendada · valores en KB",
      "fmt.advanced": "Avanzado",
      "fmt.syncLabel": "Compensar desfase (ms)",
      "fmt.syncHint": "Normalmente 0. Si en algún celular el audio va atrasado, la imagen esperará este tiempo.",
      "fmt.stillLabel": "Enviar como imagen fija (experimental)",
      "fmt.stillHint": "Por defecto la imagen se envía como un sticker animado de un solo cuadro que dura lo que el audio, igual que los stickers con sonido conocidos. Marca esto para probar si WhatsApp también acepta el sonido en un sticker fijo.",
      "fmt.cellNa": "No disponible para este tramo",
      "fmt.cellNo": "≈ {size} aun con la calidad mínima: supera 1 MB",
      "fmt.cellLow": "≈ {size} con la calidad normal: se bajará la calidad para que quepa",
      "fmt.chosen": "Elegido: {side} px · {fps} fps · ≈ {size}{low}",
      "fmt.chosenLow": " (con menos calidad)",
      "fmt.noneFits": "Ninguna combinación cabe en 1 MB: acorta el tramo.",
      "fmt.ready": "Listo en {sec} s. Elige una casilla (★ = recomendada).",
      "fmt.cancelled": "Cancelado",
      "fmt.error": "Error: {msg}",

      // Crear y enviar
      "create.metaHint": "Datos del sticker (opcional): WhatsApp los muestra debajo del sticker. Se recuerdan.",
      "create.pack": "Paquete",
      "create.packPh": "Ej.: Mis memes",
      "create.author": "Autor",
      "create.authorPh": "Ej.: tu nombre o apodo",
      "create.btn": "Crear sticker",
      "create.btnDone": "✓ Sticker creado",
      "create.btnChanged": "Crear sticker con los cambios",
      "create.cancel": "Cancelar",
      "create.previewAlt": "vista previa del sticker",
      "create.together": "▶ Ver y oír juntos",
      "create.destOpen": "Enviar al chat abierto",
      "create.destOpenFwd": "Enviar al chat abierto y abrir Reenviar",
      "create.destSelf": "Guardar en mi chat (Tú) y abrir Reenviar",
      "create.send": "Enviar",
      "create.download": "Descargar .webp y .ogg",
      "create.stale": "Cambiaste algo después de crear este sticker. Pulsa «Crear sticker con los cambios»; si lo envías ahora, se envía la versión anterior.",
      "create.ready": "Sticker listo. Revisa la vista previa y envíalo.",
      "create.sent": "Enviado.",
      "create.sentFwd": "Enviado. Elige en el diálogo los chats a los que reenviarlo.",
      "create.sendErr": "Error al enviar: {msg}",
      "create.infoStill": " · fijo",
      "create.infoImgAudio": "imagen {img} · audio {aud}",
      "create.infoLine": "{dur} · {side} px{fps}{still} · calidad {q} · sticker {webp}{est} · audio {ogg} a {kbps} kbps",
      "create.infoEst": " (estimado {est})",

      // Herramientas de prueba
      "tools.summary": "Herramientas de prueba (registro, diagnóstico)",
      "tools.diagnose": "Diagnóstico",
      "tools.saveLog": "Guardar registro…",
      "tools.openLog": "Ver registro completo",

      // Conversión (convert.js)
      "conv.videoTimeout": "Tiempo agotado cargando el video",
      "conv.videoReadErr": "El navegador no pudo leer el video",
      "conv.videoReadErrDetail": "El navegador no pudo leer el video (código {code}: {msg})",
      "conv.unsupportedFormat": "formato no soportado",
      "conv.seekTimeout": "Tiempo agotado buscando el segundo {sec}",
      "conv.noRvfc": "sin requestVideoFrameCallback",
      "conv.playbackNoFrames": "La reproducción no entregó cuadros",
      "conv.playbackStopped": "La reproducción se detuvo",
      "conv.readingFrames": "Leyendo cuadros {cur}/{total}",
      "conv.noVideoImage": "El video no tiene imagen (¿es solo audio?)",
      "conv.noImageDecoder": "Este navegador no puede leer GIF animados (falta ImageDecoder). Usa Chrome o Edge actualizados.",
      "conv.unsupportedImg": "El navegador no puede leer imágenes {type}",
      "conv.readingGif": "Leyendo cuadros del GIF {cur}/{total}",
      "conv.readImgErr": "El navegador no pudo leer la imagen ({msg})",
      "conv.invalidWebp": "El canvas no devolvió un WebP válido",
      "conv.noWebpSupport": "Este navegador no puede generar WebP (devolvió {type}). Usa Chrome o Edge.",
      "conv.webpNoData": "WebP sin datos de imagen",
      "conv.encoding": "Codificando ({side} px, {fps} fps, calidad {q}) {cur}/{total}",
      "conv.tooBig": "No cabe en 1 MB ni con la calidad mínima ({kb} KB). Elige menos fps o menos resolución.",
      "conv.audioReadErr": "No se pudo leer el audio. ¿El archivo tiene sonido? ({msg})",
      "conv.audioShort": "El audio dura {dur} s y el tramo empieza en {start} s",
      "conv.noAudioEncoder": "Este navegador no tiene WebCodecs (AudioEncoder). Usa Chrome o Edge actualizados.",
      "conv.noOpus": "El navegador no puede codificar Opus con WebCodecs",
      "conv.oggSegments": "Página Ogg con demasiados segmentos",
      "conv.readingImage": "Leyendo la imagen…",
      "conv.imageReady": "Imagen lista",
      "conv.calculating": "Calculando opciones…",
      "conv.optionsReady": "Opciones listas",
      "conv.calcFirst": "Primero calcula las opciones del tramo",
      "conv.audioChanged": "La duración del audio cambió: vuelve a calcular las opciones",
      "conv.audioTooLong": "Con {sec} s el audio no cabe en 1 MB (límite de WhatsApp). Máximo unos {min} minutos.",
      "conv.extractingAudio": "Extrayendo audio…",
      "conv.encodingAudio": "Codificando audio…",
      "conv.audioTooBig": "El audio pesa {kb} KB (máximo 1000 KB)",
      "conv.audioUnplayable": "El audio generado no se puede reproducir: {msg}",
      "conv.done": "Listo",
      "conv.noComboFits": "Ninguna combinación cabe en 1 MB para este tramo",

      // WhatsApp (wa.js / main.js)
      "wa.modUnavailable": "Módulo {name} no disponible y no hay requireLazy",
      "wa.modTimeout": "Tiempo agotado cargando el módulo {name}",
      "wa.noSelfWid": "No se pudo obtener tu propio número",
      "wa.invalidAudio": "WhatsApp no considera válido el audio subido (isCompleteStickerAudio={val})",
      "wa.sendFailed": "WhatsApp no pudo enviar el sticker ({res})",
      "wa.msgError": "El mensaje quedó en estado de error (ack {ack})",
      "wa.findingChat": "Buscando chat…",
      "wa.noOpenChat": "Abre primero un chat",
      "wa.noSelfChat": "No se encontró tu chat propio",
      "wa.uploadingAudio": "Subiendo audio…",
      "wa.sendingSticker": "Enviando sticker…",
      "wa.waitingAck": "Esperando confirmación del servidor…",
      "wa.openingForward": "Abriendo Reenviar…",
      "wa.loadTimeout": "WhatsApp Web no terminó de cargar en 3 minutos (¿sesión cerrada o código cambiado?)",

      // Página de registro (registro.html / registro.js)
      "log.title": "Stickers con sonido: registro",
      "log.desc": "Si algo falla, descarga el registro y compártelo con quien te pasó la extensión. Los números de teléfono aparecen ocultos.",
      "log.loading": "Cargando…",
      "log.download": "Descargar registro (.json)",
      "log.copy": "Copiar",
      "log.copied": "Copiado",
      "log.onlyErrors": "Solo errores",
      "log.showAll": "Ver todo",
      "log.clear": "Borrar registro",
      "log.clearConfirm": "¿Borrar todo el registro?",
      "log.summary": "{total} entradas · {errs} errores · {warns} avisos · {sessions} sesiones",
    },

    en: {
      // Header & panel
      "app.title": "Stickers with Sound",
      "app.subtitle": "Version {version} · processed locally in your browser · max 1 MB per sticker",
      "app.kofi": "☕ Support",
      "app.kofiTitle": "This extension is free. If you find it useful, you can support the project on Ko-fi.",
      "app.close": "Close",
      "app.langTitle": "Change language",

      // Tabs
      "tab.video": "Video",
      "tab.video.desc": "A video with its own sound: trim the clip and the video and audio stay in sync.",
      "tab.image": "Image + audio",
      "tab.image.desc": "A still image with the sound of your choice. The sticker lasts as long as the audio clip.",
      "tab.mix": "Video or GIF + audio",
      "tab.mix.desc": "An animation (a muted video or a GIF) paired with the audio of your choice.",

      // Sections
      "sec.video": "Video",
      "sec.trim": "Clip",
      "sec.image": "Image",
      "sec.audio": "Audio",
      "sec.animation": "Animation",
      "sec.format": "Format",
      "sec.createSend": "Create & send",

      // Trimmer
      "trim.startHandle": "Clip start (drag)",
      "trim.endHandle": "Clip end (drag)",
      "trim.trackTitle": "Click or drag to scrub",
      "trim.playSeg": "▶ Clip",
      "trim.playCur": "▶ From cursor",
      "trim.playEnd": "▶ End of clip",
      "trim.useCursor": "⤓ cursor",
      "trim.useCursorStart": "Set start to cursor position",
      "trim.useCursorEnd": "Set end to cursor position",
      "trim.start": "Start",
      "trim.end": "End",
      "trim.prevFrame": "One frame back",
      "trim.nextFrame": "One frame forward",
      "trim.cursor": "cursor {time}",
      "trim.duration": "duration {time}",
      "trim.hintVideo": "Drag the green handles: the video shows the frame at each handle. Click or drag on the bar to move the playhead.",
      "trim.hintAudio": "Choose where the audio starts and ends. Drag the handles or enter seconds.",
      "trim.hintMixVideo": "Choose the animation clip. This video's original sound is not used.",

      // Video crop
      "crop.label": "Crop",
      "crop.off": "Off",
      "crop.free": "Free",
      "crop.square": "1:1",
      "crop.reset": "Reset",
      "crop.hint": "Drag the box or its handles over the video.",

      // File pickers
      "pick.video": "Choose video…",
      "pick.videoHint": "Any video with sound.",
      "pick.image": "Choose image…",
      "pick.imageHint": "JPG, PNG, WebP… (a photo, drawing, or meme).",
      "pick.audio": "Choose audio…",
      "pick.audioHint": "MP3, M4A, OGG, WAV… or a video to extract sound from.",
      "pick.mix": "Choose video or GIF…",
      "pick.mixHint": "A video (its sound is ignored) or an animated GIF.",
      "pick.reading": "Reading {name}…",
      "pick.readErr": "Could not read: {msg}",
      "pick.useErr": "Could not use: {msg}",
      "pick.noSound": " · appears to have no sound",
      "pick.gifInfo": "{name} · {dur} · {frames} frames · {w}×{h} · used in full",
      "pick.animNote": "This is an animated image: only its first frame is used here. To keep the motion, use the «Video or GIF + audio» tab.",
      "pick.staticGifErr": "is a still image. Use the «Image + audio» tab.",
      "pick.chosenImageAlt": "chosen image",
      "pick.chosenGifAlt": "chosen GIF",
      "mix.decimalSep": ".",
      "pick.chosenImageAlt": "chosen image",
      "pick.chosenGifAlt": "chosen GIF",
      "mix.decimalSep": ".",

      // Mix (Video/GIF + audio)
      "mix.fitLabel": "If durations differ",
      "mix.fitIndependent": "Let each keep its own duration",
      "mix.fitRepeat": "Loop the animation until the audio ends",
      "mix.fitFreeze": "Freeze the last frame until the audio ends",
      "mix.needBoth": "Choose both an animation and an audio track to see the sticker duration.",
      "mix.sameDur": "Animation and audio have the same duration: {dur}.",
      "mix.summaryHead": "Animation {v} · audio {a}. ",
      "mix.summaryIndep": "Each keeps its own duration: tapping the sticker starts both together and they finish separately. Changing the audio won't require recalculating options.",
      "mix.summaryCut": "Animation is longer: it will be trimmed to {a}.",
      "mix.summaryRepeat": "Sticker lasts {a}: the animation loops {n} times.",
      "mix.summaryFreeze": "Sticker lasts {a}: the animation freezes on its last frame at {v}.",
      "mix.testTogether": "▶ Preview together",
      "mix.previewHint": "Preview: the animation plays once, just like in WhatsApp.",

      // Format & grid
      "fmt.frame": "Framing",
      "fmt.fit": "Fit (transparent edges)",
      "fmt.crop": "Crop (fill frame)",
      "fmt.calc": "Calculate options",
      "fmt.calcHint": "Reads the clip once and estimates the size of each combination.",
      "fmt.stale": "Something changed: recalculate options.",
      "fmt.legendOk": "fits",
      "fmt.legendLow": "fits with lower quality",
      "fmt.legendNo": "✕ exceeds 1 MB (WhatsApp rejects it)",
      "fmt.legendRec": "★ recommended · values in KB",
      "fmt.advanced": "Advanced",
      "fmt.syncLabel": "Sync offset (ms)",
      "fmt.syncHint": "Usually 0. If audio lags on some phones, the image will wait this many milliseconds.",
      "fmt.stillLabel": "Send as still image (experimental)",
      "fmt.stillHint": "By default the image is sent as a single-frame animated sticker lasting as long as the audio, matching known sound stickers. Check this to test if WhatsApp also accepts sound on a static sticker.",
      "fmt.cellNa": "Not available for this clip",
      "fmt.cellNo": "≈ {size} even at minimum quality: exceeds 1 MB",
      "fmt.cellLow": "≈ {size} at normal quality: quality will be lowered to fit",
      "fmt.chosen": "Selected: {side} px · {fps} fps · ≈ {size}{low}",
      "fmt.chosenLow": " (lower quality)",
      "fmt.noneFits": "No combination fits in 1 MB: shorten the clip.",
      "fmt.ready": "Ready in {sec} s. Pick a cell (★ = recommended).",
      "fmt.cancelled": "Cancelled",
      "fmt.error": "Error: {msg}",

      // Create & send
      "create.metaHint": "Sticker metadata (optional): WhatsApp shows this below the sticker. Saved automatically.",
      "create.pack": "Pack",
      "create.packPh": "e.g. My memes",
      "create.author": "Author",
      "create.authorPh": "e.g. your name or handle",
      "create.btn": "Create sticker",
      "create.btnDone": "✓ Sticker created",
      "create.btnChanged": "Recreate sticker with changes",
      "create.cancel": "Cancel",
      "create.previewAlt": "sticker preview",
      "create.together": "▶ Watch & listen together",
      "create.destOpen": "Send to open chat",
      "create.destOpenFwd": "Send to open chat & open Forward",
      "create.destSelf": "Save to my chat (You) & open Forward",
      "create.send": "Send",
      "create.download": "Download .webp & .ogg",
      "create.stale": "You changed something after creating this sticker. Click «Recreate sticker with changes»; sending now will send the previous version.",
      "create.ready": "Sticker ready. Check the preview and send it.",
      "create.sent": "Sent.",
      "create.sentFwd": "Sent. Choose the chats to forward it to in the dialog.",
      "create.sendErr": "Failed to send: {msg}",
      "create.infoStill": " · still",
      "create.infoImgAudio": "image {img} · audio {aud}",
      "create.infoLine": "{dur} · {side} px{fps}{still} · quality {q} · sticker {webp}{est} · audio {ogg} at {kbps} kbps",
      "create.infoEst": " (est. {est})",

      // Test tools
      "tools.summary": "Test tools (log, diagnostics)",
      "tools.diagnose": "Diagnostics",
      "tools.saveLog": "Save log…",
      "tools.openLog": "View full log",

      // Converter (convert.js)
      "conv.videoTimeout": "Timed out loading video",
      "conv.videoReadErr": "The browser could not read the video",
      "conv.videoReadErrDetail": "The browser could not read the video (code {code}: {msg})",
      "conv.unsupportedFormat": "unsupported format",
      "conv.seekTimeout": "Timed out seeking to {sec} s",
      "conv.noRvfc": "missing requestVideoFrameCallback",
      "conv.playbackNoFrames": "Playback produced no frames",
      "conv.playbackStopped": "Playback stopped",
      "conv.readingFrames": "Reading frames {cur}/{total}",
      "conv.noVideoImage": "The video has no image (is it audio-only?)",
      "conv.noImageDecoder": "This browser cannot read animated GIFs (missing ImageDecoder). Use an up-to-date Chrome or Edge.",
      "conv.unsupportedImg": "The browser cannot read {type} images",
      "conv.readingGif": "Reading GIF frames {cur}/{total}",
      "conv.readImgErr": "The browser could not read the image ({msg})",
      "conv.invalidWebp": "Canvas did not return a valid WebP",
      "conv.noWebpSupport": "This browser cannot generate WebP (returned {type}). Use Chrome or Edge.",
      "conv.webpNoData": "WebP has no image data",
      "conv.encoding": "Encoding ({side} px, {fps} fps, quality {q}) {cur}/{total}",
      "conv.tooBig": "Does not fit in 1 MB even at minimum quality ({kb} KB). Choose fewer fps or lower resolution.",
      "conv.audioReadErr": "Could not read audio. Does the file have sound? ({msg})",
      "conv.audioShort": "Audio is {dur} s long and the clip starts at {start} s",
      "conv.noAudioEncoder": "This browser lacks WebCodecs (AudioEncoder). Use an up-to-date Chrome or Edge.",
      "conv.noOpus": "The browser cannot encode Opus with WebCodecs",
      "conv.oggSegments": "Ogg page has too many segments",
      "conv.readingImage": "Reading image…",
      "conv.imageReady": "Image ready",
      "conv.calculating": "Calculating options…",
      "conv.optionsReady": "Options ready",
      "conv.calcFirst": "Calculate clip options first",
      "conv.audioChanged": "Audio duration changed: recalculate options",
      "conv.audioTooLong": "At {sec} s the audio exceeds 1 MB (WhatsApp limit). Maximum is about {min} minutes.",
      "conv.extractingAudio": "Extracting audio…",
      "conv.encodingAudio": "Encoding audio…",
      "conv.audioTooBig": "Audio is {kb} KB (max 1000 KB)",
      "conv.audioUnplayable": "Generated audio cannot be played: {msg}",
      "conv.done": "Done",
      "conv.noComboFits": "No combination fits in 1 MB for this clip",

      // WhatsApp (wa.js / main.js)
      "wa.modUnavailable": "Module {name} unavailable and no requireLazy",
      "wa.modTimeout": "Timed out loading module {name}",
      "wa.noSelfWid": "Could not retrieve your own phone number",
      "wa.invalidAudio": "WhatsApp rejected the uploaded audio (isCompleteStickerAudio={val})",
      "wa.sendFailed": "WhatsApp could not send the sticker ({res})",
      "wa.msgError": "Message ended in error state (ack {ack})",
      "wa.findingChat": "Finding chat…",
      "wa.noOpenChat": "Open a chat first",
      "wa.noSelfChat": "Could not find your own chat",
      "wa.uploadingAudio": "Uploading audio…",
      "wa.sendingSticker": "Sending sticker…",
      "wa.waitingAck": "Waiting for server confirmation…",
      "wa.openingForward": "Opening Forward…",
      "wa.loadTimeout": "WhatsApp Web did not finish loading within 3 minutes (logged out or code changed?)",

      // Log page (registro.html / registro.js)
      "log.title": "Stickers with Sound: Log",
      "log.desc": "If something fails, download the log and share it with whoever gave you the extension. Phone numbers are masked.",
      "log.loading": "Loading…",
      "log.download": "Download log (.json)",
      "log.copy": "Copy",
      "log.copied": "Copied",
      "log.onlyErrors": "Errors only",
      "log.showAll": "Show all",
      "log.clear": "Clear log",
      "log.clearConfirm": "Clear the entire log?",
      "log.summary": "{total} entries · {errs} errors · {warns} warnings · {sessions} sessions",
    },
  };

  function detectLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved) {
        const parsed = saved.startsWith('"') ? JSON.parse(saved) : saved;
        if (SUPPORTED.includes(parsed)) return parsed;
      }
    } catch (e) { /* ignore */ }
    const nav = (typeof navigator !== "undefined" && navigator.language) || "";
    return nav.toLowerCase().startsWith("es") ? "es" : "en";
  }

  WAAS.lang = detectLang();
  const listeners = new Set();

  WAAS.onLangChange = (fn) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
  };

  WAAS.setLang = (lang, { persist = true } = {}) => {
    if (!SUPPORTED.includes(lang) || lang === WAAS.lang) return;
    WAAS.lang = lang;
    if (persist) {
      try { localStorage.setItem(LANG_KEY, JSON.stringify(lang)); } catch (e) { /* ignore */ }
      try { window.postMessage({ __waas: "setLang", lang }, location.origin); } catch (e) { /* ignore */ }
      if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        try { chrome.storage.local.set({ lang }); } catch (e) { /* ignore */ }
      }
    }
    for (const fn of listeners) {
      try { fn(lang); } catch (e) { /* ignore */ }
    }
  };

  WAAS.t = (key, vars) => {
    const dict = STRINGS[WAAS.lang] || STRINGS.es;
    let s = dict[key] ?? STRINGS.es[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        s = s.replaceAll("{" + k + "}", v == null ? "" : String(v));
      }
    }
    return s;
  };
})();
