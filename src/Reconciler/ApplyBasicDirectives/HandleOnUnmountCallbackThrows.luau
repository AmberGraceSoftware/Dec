--!strict
local Types = require(script.Parent.Parent.Parent.Types)
type ReconciledNode = Types.ReconciledNode

--[[
    @param reconciledNode: Dec.ReconciledNode - The reconciled node to store cleanup tasks on
    @param payload: (instance: any) -> ()
    
    Immediately spawns the given OnMount callback with the reconciled instanc
     as an argument
]]
local function HandleOnUnmountCallbackThrows(
    reconciledNode: ReconciledNode,
    payload: (instance: any) -> ()
)
    local instance = reconciledNode._instance :: Instance
    table.insert(reconciledNode._unsubscribes, function()
        task.spawn(payload, instance)
    end)
end

return HandleOnUnmountCallbackThrows