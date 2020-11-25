var mapsObject = document.getElementsByClassName("maps")[0];

function populateMaps() {
    mapsObject.innerHTML += `<div class="map">
    <img src="../resources/images/unknown_map.png" />
    <section>
        <h1>There is no learning curve</h1>
        <h4>Author: &lt;name&gt;</h4>
        <p>This is a testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <img src="../resources/images/run_server.png" width=32 />
        <div class="meta">1.16</div>
        <div class="meta">Multiplayer</div>
        <div class="meta">Co-op</div>
    </section>
</div>`
}