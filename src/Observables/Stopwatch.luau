--!strict
local Types = require(script.Parent.Parent.Types)
local BaseTimer = require(script.Parent.BaseTimer)
local Alpha = require(script.Parent.Alpha)

export type Stopwatch = Types.Stopwatch
export type Alpha = Types.Alpha

local Stopwatch = {}
Stopwatch.__index = {}
Stopwatch.__index._dectype = "Observable"
Stopwatch.__index._decobservabletype = "Stopwatch"

function Stopwatch.__index.Alpha(self: Stopwatch, endElapsedTime: number): Alpha
    error("Not implemented yet")
end

Stopwatch.__index.Start = BaseTimer.__index.Start
Stopwatch.__index.Stop = BaseTimer.__index.Stop
Stopwatch.__index.Pause = BaseTimer.__index.Pause
Stopwatch.__index.Resume = BaseTimer.__index.Resume
Stopwatch.__index.Current = BaseTimer.__index.Current
Stopwatch.__index.Subscribe = BaseTimer.__index.Subscribe
Stopwatch.__index.Destroy = BaseTimer.__index.Destroy

function Stopwatch.new(): Stopwatch
    return setmetatable({
        _stepConnection = nil,
        _resumeAt = nil,
        _current = 0,
        -- _consumers = nil,
        -- _consumersWeak = nil,
    }, Stopwatch :: any)
end

return Stopwatch