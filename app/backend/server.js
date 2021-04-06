var colors = require('colors');const { stderr } = require('process');
 colors.enabled = true;

var serverProcess = require('child_process').spawn('java', ['-jar', 'D:\\Games\\Minecraft\\Servers\\,ElementalMC\\2.0\\Main\\paper.jar', '--nogui'], {cwd: "D:\\Games\\Minecraft\\Servers\\,ElementalMC\\2.0\\Main", env: []});

var stream = require('stream');
var stdoutStream = new stream.Writable();
var stderrStream = new stream.Writable();
stdoutStream._write = function (chunk, encoding, done) {
    if(chunk.toString() != ">") {
        console.log("<START>" + chunk.toString().replace("\n", "\\n") + "<END>");
    }
    done();
}

stderrStream._write = function (chunk, encoding, done) {
    if(chunk.toString() != ">") {
        console.log(chunk.toString().replace("\n", "\\n"));
    }
    done();
}

serverProcess.on("close", (code) => {
    console.log(colors.red("end!"));
});

serverProcess.stdout.pipe(stdoutStream);
serverProcess.stderr.pipe(stderrStream);