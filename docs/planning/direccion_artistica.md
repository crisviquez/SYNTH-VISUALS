# Dirección Artística y Diseño: Proyecto Audiovisual Generativo

El proyecto explorará el arte generativo audiovisual, utilizando la música como fuente principal de movimiento, ritmo y transformación visual. La prioridad será crear piezas originales con una identidad visual experimental, altamente personalizable y modular, con capacidad de adaptarse al género, la energía y la identidad de distintos artistas.

## Dirección artística

Para superar la limitación inicial y ofrecer una experiencia variada, el sistema se estructurará bajo un ecosistema de estilos modulares que los usuarios y artistas podrán seleccionar o combinar:

1. **Generative Core (Geometría Estructural):** Visualizaciones abstractas centradas en estructuras circulares, polígonos complejos, partículas densas, líneas modulares y geometría rítmicamente reactiva, ideal para música electrónica o sintética.

2. **Ambient Visuals (Atmósferas Orgánicas):** Composiciones fluidas que combinan elementos abstractos sutiles con texturas líquidas, gradientes difusos, paisajes oníricos o fotografías intervenidas, pensadas para géneros relajados o ambientales.

3. **Glitch & Cyberpunk (Distorsión y Ruido):** Estética de alta energía con efectos de compresión visual, desplazamiento de canales cromáticos (*chromatic aberration*), interferencias digitales y *scanlines* que responden agresivamente a los transitorios y frecuencias agudas.

4. **Kinetic Typography & Branding (Identidad de Artista):** Un estilo enfocado en la integración dinámica de logotipos, tipografías personalizadas y elementos gráficos de marca que pulsan, rotan o se deforman al ritmo de la música, optimizado para videoclips y *teasers* promocionales.

5. **Fluid Dynamics & Organic Particles (Flujos Naturales):** Simulaciones de fluidos, comportamientos de enjambre (*boids*), campos vectoriales y sistemas de partículas orgánicas que reaccionan de manera fluida a las frecuencias de graves y medios-bajos.

Se experimentará con paletas de colores dinámicas (inspiradas en estados de ánimo, portadas de discos o generadas por algoritmos de color), densidades variables, velocidades de interpolación y niveles de intensidad. No se establecerá una estética definitiva hasta haber desarrollado y comparado varios experimentos.

## Ecosistema de Reactividad

La interacción entre el sonido y la imagen no será meramente aleatoria; el motor de análisis de audio se desglosará en capas interpretativas:

- **Frecuencias Bajas (Sub-Bass / Bass):** Controlarán la escala, el pulso estructural, los desplazamientos de cámara y la distorsión o expansión de elementos principales.
- **Frecuencias Medias (Voces e Instrumentos Principales):** Guiarán la densidad de texturas, la aparición de partículas secundarias y los cambios de color o saturación.
- **Frecuencias Agudas (Platillos / Transitorios):** Activarán destellos (*flashes*), partículas rápidas, efectos *glitch* o micro-variaciones geométricas.
- **Detección de Ritmo (Onset / BPM):** Sincronizará cortes de escena, cambios de patrón o pulsaciones rítmicas generales para mantener el sentido de compás.

## Alcance del MVP

### 1. Primera Versión Funcional (MVP)

- **Carga de Audio:** Permitir cargar y reproducir un archivo de audio compatible (MP3).
- **Análisis Sonoro Básico:** Extracción de bandas de frecuencia (graves, medios, agudos) para gobernar los parámetros visuales.
- **Biblioteca de Estilos Iniciales:** Selector entre al menos 3 estilos visuales base (por ejemplo: *Generative Core*, *Ambient Visuals* y *Glitch*).
- **Parámetros de Control en Tiempo Real:** Ajustes de paleta de colores, velocidad de animación, sensibilidad al audio e intensidad general.
- **Exportación:** Capacidad de grabar y exportar la visualización resultante como archivo de video (sujeto a las capacidades de renderizado en el navegador).

### 2. Etapas Posteriores (Escalabilidad a Largo Plazo)

- **Identidad de Artista:** Módulos para cargar logotipos personalizados, imágenes de portada, marcas de agua y paletas de colores corporativas/artísticas.
- **Presets Avanzados y Guardado:** Sistema de guardado de configuraciones favoritas por canción o artista.
- **Nuevos Estilos Modulares:** Incorporación de más estilos visuales y la capacidad de mezclar capas de diferentes estilos simultáneamente (*compositing* en tiempo real).
- **Diferentes Fuentes de Audio:** Incorporación de más formas de cargar audio a la plataforma (WAV, Spotify, etc.).

## Principios de diseño

- **Valor Estético Independiente:** La visualización debe poseer un valor artístico autónomo incluso cuando se observa sin sonido.
- **Vínculo Causa-Efecto:** El movimiento debe estar intrínsecamente relacionado con la física del sonido, evitando la aleatoriedad vacía.
- **Arquitectura Reutilizable:** Los diferentes estilos deben compartir una base técnica modular y optimizada (renderizado eficiente).
- **Interfaz Intuitiva:** El panel de control debe permitir a músicos, artistas visuales y creadores experimentar profundamente sin requerir conocimientos avanzados de programación.
- **Enfoque en Compartir:** El proyecto debe priorizar la creación de piezas audiovisuales atractivas, originales y listas para redes sociales o visuales en vivo.

## Criterios de éxito

El MVP se considerará terminado cuando el usuario pueda cargar una canción, seleccionar cualquiera de los dos estilos, modificar los parámetros principales, observar una reacción al audio y generar un video utilizable.

También deberá existir una demostración visual del resultado, documentación del proceso y un repositorio con el código organizado.
