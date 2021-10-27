var wrench = $("#wrench");
var nut = $("#nut");

var tm = new TimelineMax({repeat: -1});

  tm
    .to(wrench, 0.3, {y: 38})
    .to(wrench, 0.4, {rotation: 120, transformOrigin: '49% 95%'})
    .to(nut, 0.4, {rotation: 120, transformOrigin: '50% 50%'}, '-=0.4')
    .to(wrench, 0.4, {x: 38, y: 55})
    .to(wrench, 0.4, {y:0, x: 0, rotation: 0})
