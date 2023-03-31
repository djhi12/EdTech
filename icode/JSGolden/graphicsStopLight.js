// Variables
var LIGHT_RADIUS = 35;
var STOPLIGHT_WIDTH = 120;
var STOPLIGHT_HEIGHT = 350;
var DIST_BETWEEN_LIGHTS = 100;
var GRAY_COLOR = "#737071";

function start() {
    // Chamge location
    var centerX = getWidth() / 2; 
    var centerY = getHeight() / 2;
	
    // Make a rectangle 
    var rect = new Rectangle(STOPLIGHT_WIDTH, STOPLIGHT_HEIGHT);
    rect.setColor(GRAY_COLOR);
    rect.setPosition(centerX - STOPLIGHT_WIDTH / 2, centerY - STOPLIGHT_HEIGHT / 2);
    add(rect);
	
    // Calling the drawCircle function | red, yellow, and green colors
    drawCircle(LIGHT_RADIUS, Color.red, centerX, centerY - DIST_BETWEEN_LIGHTS);
    drawCircle(LIGHT_RADIUS, Color.yellow, centerX, centerY);
    drawCircle(LIGHT_RADIUS, Color.green, centerX, centerY + DIST_BETWEEN_LIGHTS);
}

// Function circle
function drawCircle(radius, color, x, y) {
    // Create a circle
    var circle = new Circle(radius);
    circle.setColor(color);
    circle.setPosition(x, y);
    add(circle);
}