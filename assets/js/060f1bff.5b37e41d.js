"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[659],{66464:e=>{e.exports=JSON.parse('{"functions":[{"name":"New","desc":"Creates a new VirtualInstance that represents a newly-created Roblox\\nInstance (via Instance.new(className)).","params":[{"name":"className","desc":"","lua_type":"string"},{"name":"props","desc":"","lua_type":"{[string]: any}?"},{"name":"children","desc":"","lua_type":"{[any]: CanBeObservable<VirtualInstance?>}"}],"returns":[{"desc":"","lua_type":"VirtualInstance"}],"function_type":"static","source":{"line":22,"path":"src/VirtualInstanceCreators.luau"}},{"name":"Clone","desc":"Creates a new VirtualInstance that represents a cloned Roblox Instance\\nfrom a given template instance (via template:Clone()).","params":[{"name":"template","desc":"","lua_type":"Instance"},{"name":"props","desc":"","lua_type":"{[string]: any}?"},{"name":"children","desc":"","lua_type":"{[any]: CanBeObservable<VirtualInstance?>}"}],"returns":[{"desc":"","lua_type":"VirtualInstance"}],"function_type":"static","source":{"line":47,"path":"src/VirtualInstanceCreators.luau"}},{"name":"Premade","desc":"Creates a new VirtualInstance that represents a pre-existing Roblox Instance\\nto be decorated. This will modify the properties of an existing instance\\nrather than creating or destroying new instanvces.\\n\\nThe instance modified will either be the one that is passed into\\nDec.CreateRoot(), or a child of an existing virtual instance that Dec will\\nautomatically wait for (specified via\\n`virtualInstance:Child(path, Dec.Premade( . . . ))` ).","params":[{"name":"props","desc":"","lua_type":"{[string]: any}?"},{"name":"children","desc":"","lua_type":"Dec.ChildMap?"}],"returns":[{"desc":"","lua_type":"VirtualInstance"}],"function_type":"static","source":{"line":77,"path":"src/VirtualInstanceCreators.luau"}},{"name":"Root","desc":"Creates a new Root instance. The Root is a reference to a real Roblox\\nInstance and is used to reconcile Virtual Instances.","params":[{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Root"}],"function_type":"static","source":{"line":73,"path":"src/Reconciler/Root.luau"}},{"name":"CoerceAsObservable","desc":"This function coerces the passed in value to an Observable. Useful for\\nunwrapped the CanBeObservable<T> type in a component\'s props.","params":[{"name":"value","desc":"","lua_type":"CanBeObservable<T>"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":23,"path":"src/Util/CoerceAsObservable.luau"}},{"name":"Map","desc":"Returns a curryable mapping function, which in turn returns a derived\\nobservable from the dependent observables passed in.\\n\\nExample usage:\\n\\nlocal x = Dec.State(2)\\nlocal y = Dec.State(3)\\n\\nlocal sum = Dec.Map(x, y)(function(currentX, currentY)\\n    return currentX + currentY\\nend)","params":[{"name":"...","desc":"","lua_type":"Observable<...T>"}],"returns":[{"desc":"","lua_type":"((map: ...T) -> ReturnType) -> Observable<ReturnType>"}],"function_type":"static","source":{"line":53,"path":"src/Util/MapObservable.luau"}},{"name":"State","desc":"Creates a new State Observable object with the given initial value.","params":[{"name":"initialValue","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"State<T>"}],"function_type":"static","source":{"line":50,"path":"src/Observables/State.luau"}},{"name":"Spring","desc":"Creates an easing observable that simulates the behavior of a critically\\ndamped spring. The spring simulates in realtime until the target value is\\nreached. NOTE: Spring must have at lease one Subscriber (or be mounted on at\\nleast one VirtualInstance) to simulate properly! Observables automatically\\ngarbage collect once the object is dereferenced and all subscribers are\\ndisconnected (and VirtualInstances unmounted)","params":[{"name":"target","desc":"","lua_type":"Observable<T>"},{"name":"angularFrequency","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":159,"path":"src/Observables/Spring.luau"}},{"name":"Eased","desc":"Creates an Observable that eases in realtime every time the input Observable\\nchanges its value, based on the TweenInfo provided.\\n\\n:::caution\\nEased must have at least one Subscriber (or be mounted on at least one\\nVirtualInstance) to simulate in realtime!\\n:::","params":[{"name":"target","desc":"","lua_type":"Observable<T>"},{"name":"info","desc":"","lua_type":"TweenInfo"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":91,"path":"src/Observables/Eased.luau"}},{"name":"Dict","desc":"Creates a new Dict state observable with the given initial value.","params":[{"name":"initialValue:","desc":"","lua_type":"{[K]: V}"}],"returns":[{"desc":"","lua_type":"Dict<T>"}],"function_type":"static","source":{"line":203,"path":"src/Observables/StateRecord.luau"}},{"name":"Alpha","desc":"Creates a new Alpha Observable object, which maps the current value of the\\nsource observable to the range [0, 1] based on sourceRangeMin and\\nsourceRangeMax","params":[{"name":"source","desc":"","lua_type":"Observable<number>"},{"name":"sourceRangeMin","desc":"","lua_type":"number"},{"name":"sourceRangeMax","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Alpha"}],"function_type":"static","source":{"line":138,"path":"src/Observables/Alpha.luau"}},{"name":"IntSpring","desc":"Creates an easing observable that simulates the behavior of a critically\\ndamped spring, constrained to the Integer range. Rounds the current position\\ntowards the target value, useful for elements like counters. \\n\\n:::caution\\nSprings must have at least one Subscriber (or be mounted on at least one\\nVirtualInstance) to simulate in realtime!\\n:::","params":[{"name":"target","desc":"","lua_type":"Observable<T>"},{"name":"angularFrequency","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":87,"path":"src/Observables/IntSpring.luau"}},{"name":"AngleSpring","desc":"Creates an easing observable that simulates the behavior of a critically\\ndamped spring, wrapped around the range [-pi, pi]. The spring simulates in\\nrealtime until the target value is reached.\\n\\n:::caution\\nAngleSpring must have at least one Subscriber (or be mounted on at least one\\nVirtualInstance) to simulate in realtime!\\n:::","params":[{"name":"target","desc":"","lua_type":"Observable<T>"},{"name":"angularFrequency","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":106,"path":"src/Observables/AngleSpring.luau"}},{"name":"CustomObservable","desc":"Creates a new Dec Observable object. Observables are used to hold, derive,\\nor map state within a Dec application.\\n\\nThe first parameter should be a function that always returns the current\\nstate of the observable whenever called. The second parameter is a function\\nwhich sets up resources to notify its first paramter whenever the current\\nstate changes, then returns a \\"cleanup\\" function which takes down these\\nresources when the observable is no longer subscribed or mounted.\\n\\n:::warning\\nMake sure the `createUpdateStream` parameter correctly matches type, and\\nreturns a \\"cleanup\\" function which fully cleans up all listeners or\\nresources. Observables garbage collect ONLY when all subscribers are\\nunsubscribed, and all VirtualInstances using them are unmounted.\\n:::","params":[{"name":"getCurrent","desc":"","lua_type":"() -> T"},{"name":"createUpdateStream","desc":"","lua_type":"(notifyChange: () -> ()) -> (() -> ())"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":179,"path":"src/Observables/Observable.luau"}},{"name":"IsStateRecord","desc":"This function checks if the passed in value is a Dec.StateRecord observable\\nobject","params":[{"name":"passedIn","desc":"","lua_type":"unknown"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":12,"path":"src/Reflection/IsStateRecord.luau"}},{"name":"IsVirtualInstance","desc":"This function checks if the passed in value is a Dec VirtualInstance","params":[{"name":"passedIn","desc":"","lua_type":"unknown"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":11,"path":"src/Reflection/IsVirtualInstance.luau"}},{"name":"IsState","desc":"This function checks if the passed in value is a Dec.State observable object","params":[{"name":"passedIn","desc":"","lua_type":"unknown"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":11,"path":"src/Reflection/IsState.luau"}},{"name":"IsObservable","desc":"This function checks if the passed in value is an Observable.","params":[{"name":"passedIn","desc":"","lua_type":"unknown"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":11,"path":"src/Reflection/IsObservable.luau"}},{"name":"GetVirtualInstanceType","desc":"This function returns the constructor type for VirtualInstance (\\"New\\",\\n\\"Clone\\", or \\"Premade\\"). Errors if the passed in value is not a\\nVirtualInstance.","params":[{"name":"passedIn","desc":"","lua_type":"VirtualInstance"}],"returns":[{"desc":"","lua_type":"\\"New\\" | \\"Clone\\" | \\"Premade\\""}],"function_type":"static","source":{"line":16,"path":"src/Reflection/GetVirtualInstanceType.luau"}},{"name":"ObserveFusionState","desc":"Interoperability function that maps a Fusion StateObject to a Dec\\nObservable object. The returned observable is garbage collected once\\ndereferenced and unsubscribed/unmounted.\\n\\nThe Fusion library must be provided, as Fusion StateObjects only work when\\nembedded in a Fusion runtime.","params":[{"name":"Fusion","desc":"","lua_type":"any"},{"name":"fusionStateObject","desc":"","lua_type":"Fusion.StateObject<T>"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":22,"path":"src/Interop/ObserveFusionState.luau"}}],"properties":[{"name":"Nil","desc":"Symbol that represents a \\"Nil\\" value. Because \\"nil\\" values can\'t be\\nrepresented as values of a Luau table, Dec.Nil can be used in its place.\\nExample usage:\\n```lua\\nDec.New(\\"BillboardGui\\", {\\n    Adornee =  Dec.Map(props.adornee)(function(adorneeCurrent: Instance?)\\n        return adorneeCurrent or Dec.Nil\\n    end),\\n})\\n```","lua_type":"Symbol<\\"Nil\\">","source":{"line":20,"path":"src/Symbols/init.luau"}}],"types":[{"name":"CanBeObservable<T>","desc":"Utility type that denotes a value can be an observable. Dec provides the\\nutility function [Dec.CoerceAsObservable] for unwrapping these objects.","lua_type":"Observable<T> | T","source":{"line":37,"path":"src/init.luau"}}],"name":"Dec","desc":"","source":{"line":46,"path":"src/init.luau"}}')}}]);