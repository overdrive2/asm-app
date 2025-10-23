import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\VendorController::index
 * @see app/Http/Controllers/VendorController.php:11
 * @route '/vendors'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vendors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VendorController::index
 * @see app/Http/Controllers/VendorController.php:11
 * @route '/vendors'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VendorController::index
 * @see app/Http/Controllers/VendorController.php:11
 * @route '/vendors'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VendorController::index
 * @see app/Http/Controllers/VendorController.php:11
 * @route '/vendors'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VendorController::index
 * @see app/Http/Controllers/VendorController.php:11
 * @route '/vendors'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VendorController::index
 * @see app/Http/Controllers/VendorController.php:11
 * @route '/vendors'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VendorController::index
 * @see app/Http/Controllers/VendorController.php:11
 * @route '/vendors'
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
/**
* @see \App\Http\Controllers\VendorController::store
 * @see app/Http/Controllers/VendorController.php:31
 * @route '/vendors'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vendors',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VendorController::store
 * @see app/Http/Controllers/VendorController.php:31
 * @route '/vendors'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VendorController::store
 * @see app/Http/Controllers/VendorController.php:31
 * @route '/vendors'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VendorController::store
 * @see app/Http/Controllers/VendorController.php:31
 * @route '/vendors'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VendorController::store
 * @see app/Http/Controllers/VendorController.php:31
 * @route '/vendors'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\VendorController::show
 * @see app/Http/Controllers/VendorController.php:45
 * @route '/vendors/{vendor}'
 */
export const show = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VendorController::show
 * @see app/Http/Controllers/VendorController.php:45
 * @route '/vendors/{vendor}'
 */
show.url = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vendor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: typeof args.vendor === 'object'
                ? args.vendor.id
                : args.vendor,
                }

    return show.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VendorController::show
 * @see app/Http/Controllers/VendorController.php:45
 * @route '/vendors/{vendor}'
 */
show.get = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VendorController::show
 * @see app/Http/Controllers/VendorController.php:45
 * @route '/vendors/{vendor}'
 */
show.head = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VendorController::show
 * @see app/Http/Controllers/VendorController.php:45
 * @route '/vendors/{vendor}'
 */
    const showForm = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VendorController::show
 * @see app/Http/Controllers/VendorController.php:45
 * @route '/vendors/{vendor}'
 */
        showForm.get = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VendorController::show
 * @see app/Http/Controllers/VendorController.php:45
 * @route '/vendors/{vendor}'
 */
        showForm.head = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\VendorController::update
 * @see app/Http/Controllers/VendorController.php:50
 * @route '/vendors/{vendor}'
 */
export const update = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\VendorController::update
 * @see app/Http/Controllers/VendorController.php:50
 * @route '/vendors/{vendor}'
 */
update.url = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vendor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: typeof args.vendor === 'object'
                ? args.vendor.id
                : args.vendor,
                }

    return update.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VendorController::update
 * @see app/Http/Controllers/VendorController.php:50
 * @route '/vendors/{vendor}'
 */
update.put = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\VendorController::update
 * @see app/Http/Controllers/VendorController.php:50
 * @route '/vendors/{vendor}'
 */
update.patch = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\VendorController::update
 * @see app/Http/Controllers/VendorController.php:50
 * @route '/vendors/{vendor}'
 */
    const updateForm = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VendorController::update
 * @see app/Http/Controllers/VendorController.php:50
 * @route '/vendors/{vendor}'
 */
        updateForm.put = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\VendorController::update
 * @see app/Http/Controllers/VendorController.php:50
 * @route '/vendors/{vendor}'
 */
        updateForm.patch = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\VendorController::destroy
 * @see app/Http/Controllers/VendorController.php:65
 * @route '/vendors/{vendor}'
 */
export const destroy = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vendors/{vendor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\VendorController::destroy
 * @see app/Http/Controllers/VendorController.php:65
 * @route '/vendors/{vendor}'
 */
destroy.url = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vendor: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vendor: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vendor: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vendor: typeof args.vendor === 'object'
                ? args.vendor.id
                : args.vendor,
                }

    return destroy.definition.url
            .replace('{vendor}', parsedArgs.vendor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VendorController::destroy
 * @see app/Http/Controllers/VendorController.php:65
 * @route '/vendors/{vendor}'
 */
destroy.delete = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\VendorController::destroy
 * @see app/Http/Controllers/VendorController.php:65
 * @route '/vendors/{vendor}'
 */
    const destroyForm = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VendorController::destroy
 * @see app/Http/Controllers/VendorController.php:65
 * @route '/vendors/{vendor}'
 */
        destroyForm.delete = (args: { vendor: string | number | { id: string | number } } | [vendor: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\VendorController::json
 * @see app/Http/Controllers/VendorController.php:25
 * @route '/vendors-json'
 */
export const json = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: json.url(options),
    method: 'get',
})

json.definition = {
    methods: ["get","head"],
    url: '/vendors-json',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VendorController::json
 * @see app/Http/Controllers/VendorController.php:25
 * @route '/vendors-json'
 */
json.url = (options?: RouteQueryOptions) => {
    return json.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VendorController::json
 * @see app/Http/Controllers/VendorController.php:25
 * @route '/vendors-json'
 */
json.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: json.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VendorController::json
 * @see app/Http/Controllers/VendorController.php:25
 * @route '/vendors-json'
 */
json.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: json.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VendorController::json
 * @see app/Http/Controllers/VendorController.php:25
 * @route '/vendors-json'
 */
    const jsonForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: json.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VendorController::json
 * @see app/Http/Controllers/VendorController.php:25
 * @route '/vendors-json'
 */
        jsonForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: json.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VendorController::json
 * @see app/Http/Controllers/VendorController.php:25
 * @route '/vendors-json'
 */
        jsonForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: json.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    json.form = jsonForm
const VendorController = { index, store, show, update, destroy, json }

export default VendorController