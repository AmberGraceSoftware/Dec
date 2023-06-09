--!strict
--[[
    Dec is a reactive UI library for Roblox.

    Dec combines all of the best features of modern libraries like Roact,
    Fusion, and more for building reusable, performant, declarative UI
    components.

    Github Repository: AmberGraceSoftware/Dec
    Wally Package ID: ambergracesoftware/dec
    Documentation: Found on Github
]]

local Types = require(script.Types)
local Symbols = require(script.Symbols)
local VirtualInstanceCreators = require(script.VirtualInstanceCreators)
local Root = require(script.Reconciler.Root)
local Observable = require(script.Observables.Observable)

export type Unsubscribe = Types.Unsubscribe
export type Observable<T> = Types.Observable<T>
export type State<T> = Types.State<T>
export type Record<T> = Types.StateRecord<T>
export type Dict<T> = Types.StateDict<T>
export type Spring<T> = Types.Spring<T>
export type AngleSpring<T> = Types.AngleSpring<T>
export type IntSpring<T> = Types.IntSpring<T>
export type EasedValue<T> = Types.EasedValue<T>
export type Alpha = Types.Alpha
export type BaseTimer = Types.BaseTimer
export type Stopwatch = Types.Stopwatch
export type Timer = Types.Timer
--- @type CanBeObservable<T> Observable<T> | T
--- @within Dec
--- Utility type that denotes a value can be an observable. Dec provides the
--- utility function [Dec.CoerceAsObservable] for unwrapping these objects.
export type CanBeObservable<T> = Types.CanBeObservable<T>
export type ChildMap = Types.ChildMap
export type VirtualInstance = Types.VirtualInstance
export type ReconciledNode = Types.ReconciledNode
export type Symbol<Name> = Types.Symbol<Name>
export type Root = Types.Root
export type Nil = Symbol<"Nil">

--[=[
    @class Dec

    Dec contains a collection of objects for create reactive UI components
    
    For more information, see the [Usage Guide](../docs/intro)

    :::caution
    Dec is currently in early development, and a stable first release has not
    been finished or tested..
    :::
]=]
local Dec = {}

-- Basic State and Observables
Dec.State = require(script.Observables.State).new
Dec.Record = require(script.Observables.StateRecord).new
Dec.Dict = require(script.Observables.StateRecord).newDict
Dec.Map = require(script.Util.MapObservable)
Dec.Alpha = require(script.Observables.Alpha).new
Dec.CustomObservable = Observable.new

-- Realtime simulation observable utilities
Dec.Spring = require(script.Observables.Spring).new
Dec.IntSpring = require(script.Observables.IntSpring).new
Dec.AngleSpring = require(script.Observables.AngleSpring).new
Dec.Eased = require(script.Observables.Eased).new
Dec.Stopwatch = require(script.Observables.Stopwatch).new
Dec.Timer = require(script.Observables.Timer).new

-- Interop functions
Dec.ObserveFusionState = require(script.Interop.ObserveFusionState)

-- VirtualInstance Creators
Dec.New = VirtualInstanceCreators.New
Dec.Clone = VirtualInstanceCreators.Clone
Dec.Premade = VirtualInstanceCreators.Premade

-- Root-Level Reconciler API
Dec.Root = Root.new

-- Symbols
Dec.Nil = Symbols.Nil

-- Reflection
Dec.CoerceAsObservable = require(script.Util.CoerceAsObservable)
Dec.IsObservable = require(script.Reflection.IsObservable)
Dec.IsState = require(script.Reflection.IsState)
Dec.IsStateRecord = require(script.Reflection.IsStateRecord)
Dec.IsVirtualInstance = require(script.Reflection.IsVirtualInstance)
Dec.GetVirtualInstanceType = require(script.Reflection.GetVirtualInstanceType)

return Dec