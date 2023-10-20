import { world , system } from "@minecraft/server"

world.afterEvents.itemUse.subscribe((ev)=>{
    const { itemStack , source } = ev;
    if(ev.itemStack.typeId === `karo:hook_shot_pulling`) {
        source.applyKnockback(source.getRotation().y,source.getRotation().x,10,0)
    }
})