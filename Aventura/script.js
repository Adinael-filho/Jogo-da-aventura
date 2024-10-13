let story = document.getElementById('story');
let choices = document.getElementById('choices');

function startGame() {
    story.innerText = "Você está em uma floresta densa e precisa fazer uma escolha.";
    choices.innerHTML = `
        <button onclick="exploreForest()">Explorar a floresta</button>
        <button onclick="goMountain()">Seguir o caminho para a montanha</button>
    `;
}

function exploreForest() {
    story.innerText = "Você decide explorar a floresta e logo encontra um caminho bifurcado.";
    choices.innerHTML = `
        <button onclick="takeLeftPath()">Tomar o caminho da esquerda</button>
        <button onclick="takeRightPath()">Tomar o caminho da direita</button>
    `;
}

function goMountain() {
    story.innerText = "Você segue o caminho para a montanha e encontra uma caverna misteriosa.";
    choices.innerHTML = `
        <button onclick="enterCave()">Entrar na caverna</button>
        <button onclick="climbMountain()">Escalar a montanha</button>
    `;
}

function takeLeftPath() {
    story.innerText = "O caminho da esquerda leva a uma clareira cheia de flores e um rio.";
    choices.innerHTML = `
        <button onclick="crossRiver()">Atravessar o rio</button>
        <button onclick="pickFlowers()">Pegar flores</button>
    `;
}

function takeRightPath() {
    story.innerText = "O caminho da direita leva a uma antiga árvore com uma caixa misteriosa.";
    choices.innerHTML = `
        <button onclick="inspectTree()">Inspecionar a árvore</button>
        <button onclick="restUnderTree()">Descansar sob a árvore</button>
    `;
}

function enterCave() {
    story.innerText = "Dentro da caverna, você encontra um tesouro guardado por um dragão feroz.";
    choices.innerHTML = `
        <button onclick="fightDragon()">Lutar contra o dragão</button>
        <button onclick="sneakPastDragon()">Tentar passar sem ser visto</button>
    `;
}

function climbMountain() {
    story.innerText = "Ao escalar a montanha, você encontra um sábio que lhe oferece conselhos.";
    choices.innerHTML = `
        <button onclick="askWisdom()">Pedir sabedoria</button>
        <button onclick="descendMountain()">Descer a montanha</button>
    `;
}

function crossRiver() {
    story.innerText = "Você atravessa o rio e encontra uma vila encantada.";
    choices.innerHTML = `
        <button onclick="visitVillage()">Visitar a vila</button>
        <button onclick="returnToForest()">Voltar para a floresta</button>
    `;
}

function pickFlowers() {
    story.innerText = "Você pega algumas flores, mas uma criatura mágica aparece!";
    choices.innerHTML = `
        <button onclick="befriendCreature()">Fazer amizade com a criatura</button>
        <button onclick="runAway()">Correr para longe</button>
    `;
}

function inspectTree() {
    story.innerText = "Você encontra uma caixa misteriosa enterrada sob a árvore.";
    choices.innerHTML = `
        <button onclick="openBox()">Abrir a caixa</button>
        <button onclick="leaveBox()">Deixar a caixa em paz</button>
    `;
}

function restUnderTree() {
    story.innerText = "Você descansa sob a árvore e recupera suas forças. Fim da aventura.";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function fightDragon() {
    story.innerText = "Você enfrenta o dragão com bravura, mas ele é mais forte do que você pensava. Você foi derrotado!";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function sneakPastDragon() {
    story.innerText = "Você consegue passar sem ser visto e pega o tesouro! Você é rico!";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function askWisdom() {
    story.innerText = "O sábio lhe dá um conselho valioso que você levará para a vida toda.";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function descendMountain() {
    story.innerText = "Você desce a montanha e volta para a floresta. A aventura continua.";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function visitVillage() {
    story.innerText = "Na vila, você é recebido como um herói e ganha a gratidão dos habitantes. Você se torna o novo líder!";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function befriendCreature() {
    story.innerText = "A criatura mágica se torna sua amiga e lhe oferece um presente mágico. Vocês se tornam grandes amigos!";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function runAway() {
    story.innerText = "Você corre para longe e volta para a floresta, aprendendo a ser mais cauteloso. Fim da aventura.";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function openBox() {
    story.innerText = "A caixa contém um mapa para um tesouro escondido! Você parte em uma nova aventura em busca do tesouro.";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

function leaveBox() {
    story.innerText = "Você decide deixar a caixa em paz e continua sua jornada pela floresta. Fim da aventura.";
    choices.innerHTML = '<button onclick="startGame()">Jogar Novamente</button>';
}

// Inicia o jogo
startGame();
