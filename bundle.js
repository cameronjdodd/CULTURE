// This is the initialization part to add at the beginning of your bundle.js
// It sets up the module system to work in the browser

(function(window) {
    // Create a simple module system to replace require
    window.moduleCache = {};
    window.require = function(modulePath) {
        // Return cached module if available
        if (window.moduleCache[modulePath]) {
            return window.moduleCache[modulePath];
        }
        
        // Otherwise throw error
        throw new Error(`Module ${modulePath} not found. Browser bundling issue.`);
    };

    // Add this near the end of your bundle.js, before initializing the GameController
    // This makes all the key classes globally available
    window.ElementalEmpires = ElementalEmpires;
    window.ElementalEmpiresWithEnhancedAI = ElementalEmpiresWithEnhancedAI;
    window.GameController = GameController;
    window.SimulationRunner = SimulationRunner;
    window.GameUI = GameUI;
    window.HexRenderer = HexRenderer;
    window.MysticalHarmonics = MysticalHarmonics;
    window.PhilosophicalSystemIntegration = PhilosophicalSystemIntegration;
    window.CulturalCards = CulturalCards;
    
    // Initialize module cache with the classes to make require work
    window.moduleCache['./mystical-system.js'] = MysticalHarmonics;
    window.moduleCache['./philosophical-system.js'] = PhilosophicalSystemIntegration;
    window.moduleCache['./cultural-cards-system.js'] = CulturalCards;
    window.moduleCache['./enhanced-ai.js'] = ElementalEmpiresWithEnhancedAI;
    window.moduleCache['./simulation-runner.js'] = SimulationRunner;

    // Initialize game controller after DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        window.gameController = new GameController();
    });
})(window);
