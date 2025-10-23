import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PositionController::store
 * @see app/Http/Controllers/PositionController.php:34
 * @route '/position'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/position',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PositionController::store
 * @see app/Http/Controllers/PositionController.php:34
 * @route '/position'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PositionController::store
 * @see app/Http/Controllers/PositionController.php:34
 * @route '/position'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PositionController::store
 * @see app/Http/Controllers/PositionController.php:34
 * @route '/position'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PositionController::store
 * @see app/Http/Controllers/PositionController.php:34
 * @route '/position'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PositionController::show
 * @see app/Http/Controllers/PositionController.php:45
 * @route '/position/{position}'
 */
export const show = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/position/{position}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PositionController::show
 * @see app/Http/Controllers/PositionController.php:45
 * @route '/position/{position}'
 */
show.url = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { position: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { position: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    position: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        position: typeof args.position === 'object'
                ? args.position.id
                : args.position,
                }

    return show.definition.url
            .replace('{position}', parsedArgs.position.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PositionController::show
 * @see app/Http/Controllers/PositionController.php:45
 * @route '/position/{position}'
 */
show.get = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PositionController::show
 * @see app/Http/Controllers/PositionController.php:45
 * @route '/position/{position}'
 */
show.head = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PositionController::show
 * @see app/Http/Controllers/PositionController.php:45
 * @route '/position/{position}'
 */
    const showForm = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PositionController::show
 * @see app/Http/Controllers/PositionController.php:45
 * @route '/position/{position}'
 */
        showForm.get = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PositionController::show
 * @see app/Http/Controllers/PositionController.php:45
 * @route '/position/{position}'
 */
        showForm.head = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\PositionController::update
 * @see app/Http/Controllers/PositionController.php:50
 * @route '/position/{position}'
 */
export const update = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/position/{position}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PositionController::update
 * @see app/Http/Controllers/PositionController.php:50
 * @route '/position/{position}'
 */
update.url = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { position: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { position: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    position: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        position: typeof args.position === 'object'
                ? args.position.id
                : args.position,
                }

    return update.definition.url
            .replace('{position}', parsedArgs.position.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PositionController::update
 * @see app/Http/Controllers/PositionController.php:50
 * @route '/position/{position}'
 */
update.put = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PositionController::update
 * @see app/Http/Controllers/PositionController.php:50
 * @route '/position/{position}'
 */
update.patch = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PositionController::update
 * @see app/Http/Controllers/PositionController.php:50
 * @route '/position/{position}'
 */
    const updateForm = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PositionController::update
 * @see app/Http/Controllers/PositionController.php:50
 * @route '/position/{position}'
 */
        updateForm.put = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PositionController::update
 * @see app/Http/Controllers/PositionController.php:50
 * @route '/position/{position}'
 */
        updateForm.patch = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\PositionController::destroy
 * @see app/Http/Controllers/PositionController.php:61
 * @route '/position/{position}'
 */
export const destroy = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/position/{position}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PositionController::destroy
 * @see app/Http/Controllers/PositionController.php:61
 * @route '/position/{position}'
 */
destroy.url = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { position: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { position: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    position: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        position: typeof args.position === 'object'
                ? args.position.id
                : args.position,
                }

    return destroy.definition.url
            .replace('{position}', parsedArgs.position.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PositionController::destroy
 * @see app/Http/Controllers/PositionController.php:61
 * @route '/position/{position}'
 */
destroy.delete = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PositionController::destroy
 * @see app/Http/Controllers/PositionController.php:61
 * @route '/position/{position}'
 */
    const destroyForm = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PositionController::destroy
 * @see app/Http/Controllers/PositionController.php:61
 * @route '/position/{position}'
 */
        destroyForm.delete = (args: { position: string | number | { id: string | number } } | [position: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\PositionController::index
 * @see app/Http/Controllers/PositionController.php:11
 * @route '/positions'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/positions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PositionController::index
 * @see app/Http/Controllers/PositionController.php:11
 * @route '/positions'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PositionController::index
 * @see app/Http/Controllers/PositionController.php:11
 * @route '/positions'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PositionController::index
 * @see app/Http/Controllers/PositionController.php:11
 * @route '/positions'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PositionController::index
 * @see app/Http/Controllers/PositionController.php:11
 * @route '/positions'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PositionController::index
 * @see app/Http/Controllers/PositionController.php:11
 * @route '/positions'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PositionController::index
 * @see app/Http/Controllers/PositionController.php:11
 * @route '/positions'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const PositionController = { store, show, update, destroy, index }

export default PositionController