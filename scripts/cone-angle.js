Hooks.on('init', () => {
    let settingDef = {
        name: game.i18n.localize('cone-angle.coneAngleLabel'),
        hint: game.i18n.localize('cone-angle.coneAngleLabelHint'),
        scope: 'world',
        config: true,
        type: Number,
        default: 60,
        requiresReload: true
    }
    game.settings.register('cone-angle', 'coneAngle', settingDef);

    if (game.version < 14) {
        let angle = game.settings.get("cone-angle", 'coneAngle');
        CONFIG.MeasuredTemplate.defaults.angle = angle;
    }
})

if (game.version >= 14) {
    Hooks.on("getSceneControlButtons", controls => {
        let angle = game.settings.get("cone-angle", 'coneAngle');
        controls.regions.tools.cone.shapeData = {
            type: "cone",
            x: 0,
            y: 0,
            radius: 0,
            angle: angle
        }
    });
}