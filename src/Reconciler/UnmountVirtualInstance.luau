--!strict

local Types = require(script.Parent.Parent.Types)

type VirtualInstance = Types.VirtualInstance
type ReconciledNode = Types.ReconciledNode

--[[
    @param node: Dec.ReconciledNode - The node to unmount.
    @return Dec.ReconciledNode? - The new Reconciled Node, if the old node was replaced.

    Unmounts a reconciled VirtualInstance, cleaning up all of its children,
    connections, created instances, etc.
]]
local function UnmountVirtualInstance(
    node: ReconciledNode
)   
    for _, childNode in node._childMap do
        UnmountVirtualInstance(childNode)
    end
    for _, connection in node._connections do
        connection:Disconnect()
    end
    for _, unsubscribe in node._unsubscribes do
        task.spawn(unsubscribe)
    end
    for _, instance in node._instancesToCleanup do
        instance:Destroy()
    end
end

return UnmountVirtualInstance