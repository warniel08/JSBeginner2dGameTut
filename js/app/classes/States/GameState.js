define(['State', 'Assets'], function(State, Assets) {
    var GameState = State.extend({
        init: function() {
            this._super();
        }
    });
    
    GameState.prototype.tick = function(_dt) {
        
    }
    
    GameState.prototype.render = function(_g) {
        _g.myDrawImage(Assets.getAssets('zelda').idle, 20, 20, Assets.getAssets('zelda').width, Assets.getAssets('zelda').height);   
    }
    return GameState;
});