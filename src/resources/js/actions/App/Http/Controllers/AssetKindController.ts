import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AssetKindController::index
 * @see app/Http/Controllers/AssetKindController.php:12
 * @route '/assetkinds/{category}'
 */
export const index = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/assetkinds/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetKindController::index
 * @see app/Http/Controllers/AssetKindController.php:12
 * @route '/assetkinds/{category}'
 */
index.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { category: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: typeof args.category === 'object'
                ? args.category.id
                : args.category,
                }

    return index.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetKindController::index
 * @see app/Http/Controllers/AssetKindController.php:12
 * @route '/assetkinds/{category}'
 */
index.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetKindController::index
 * @see app/Http/Controllers/AssetKindController.php:12
 * @route '/assetkinds/{category}'
 */
index.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetKindController::index
 * @see app/Http/Controllers/AssetKindController.php:12
 * @route '/assetkinds/{category}'
 */
    const indexForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetKindController::index
 * @see app/Http/Controllers/AssetKindController.php:12
 * @route '/assetkinds/{category}'
 */
        indexForm.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetKindController::index
 * @see app/Http/Controllers/AssetKindController.php:12
 * @route '/assetkinds/{category}'
 */
        indexForm.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\AssetKindController::show
 * @see app/Http/Controllers/AssetKindController.php:52
 * @route '/assetkind/{row}'
 */
export const show = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/assetkind/{row}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetKindController::show
 * @see app/Http/Controllers/AssetKindController.php:52
 * @route '/assetkind/{row}'
 */
show.url = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { row: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { row: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    row: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        row: typeof args.row === 'object'
                ? args.row.id
                : args.row,
                }

    return show.definition.url
            .replace('{row}', parsedArgs.row.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetKindController::show
 * @see app/Http/Controllers/AssetKindController.php:52
 * @route '/assetkind/{row}'
 */
show.get = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetKindController::show
 * @see app/Http/Controllers/AssetKindController.php:52
 * @route '/assetkind/{row}'
 */
show.head = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetKindController::show
 * @see app/Http/Controllers/AssetKindController.php:52
 * @route '/assetkind/{row}'
 */
    const showForm = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetKindController::show
 * @see app/Http/Controllers/AssetKindController.php:52
 * @route '/assetkind/{row}'
 */
        showForm.get = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetKindController::show
 * @see app/Http/Controllers/AssetKindController.php:52
 * @route '/assetkind/{row}'
 */
        showForm.head = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AssetKindController::store
 * @see app/Http/Controllers/AssetKindController.php:57
 * @route '/assetkind'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/assetkind',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AssetKindController::store
 * @see app/Http/Controllers/AssetKindController.php:57
 * @route '/assetkind'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetKindController::store
 * @see app/Http/Controllers/AssetKindController.php:57
 * @route '/assetkind'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AssetKindController::store
 * @see app/Http/Controllers/AssetKindController.php:57
 * @route '/assetkind'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetKindController::store
 * @see app/Http/Controllers/AssetKindController.php:57
 * @route '/assetkind'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AssetKindController::update
 * @see app/Http/Controllers/AssetKindController.php:76
 * @route '/assetkind/{row}'
 */
export const update = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/assetkind/{row}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AssetKindController::update
 * @see app/Http/Controllers/AssetKindController.php:76
 * @route '/assetkind/{row}'
 */
update.url = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { row: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { row: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    row: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        row: typeof args.row === 'object'
                ? args.row.id
                : args.row,
                }

    return update.definition.url
            .replace('{row}', parsedArgs.row.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetKindController::update
 * @see app/Http/Controllers/AssetKindController.php:76
 * @route '/assetkind/{row}'
 */
update.put = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\AssetKindController::update
 * @see app/Http/Controllers/AssetKindController.php:76
 * @route '/assetkind/{row}'
 */
    const updateForm = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetKindController::update
 * @see app/Http/Controllers/AssetKindController.php:76
 * @route '/assetkind/{row}'
 */
        updateForm.put = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\AssetKindController::destroy
 * @see app/Http/Controllers/AssetKindController.php:90
 * @route '/assetkind/{row}'
 */
export const destroy = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/assetkind/{row}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AssetKindController::destroy
 * @see app/Http/Controllers/AssetKindController.php:90
 * @route '/assetkind/{row}'
 */
destroy.url = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { row: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { row: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    row: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        row: typeof args.row === 'object'
                ? args.row.id
                : args.row,
                }

    return destroy.definition.url
            .replace('{row}', parsedArgs.row.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetKindController::destroy
 * @see app/Http/Controllers/AssetKindController.php:90
 * @route '/assetkind/{row}'
 */
destroy.delete = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AssetKindController::destroy
 * @see app/Http/Controllers/AssetKindController.php:90
 * @route '/assetkind/{row}'
 */
    const destroyForm = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetKindController::destroy
 * @see app/Http/Controllers/AssetKindController.php:90
 * @route '/assetkind/{row}'
 */
        destroyForm.delete = (args: { row: string | number | { id: string | number } } | [row: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AssetKindController::nextCode
 * @see app/Http/Controllers/AssetKindController.php:31
 * @route '/assetkind/next-code/{category}'
 */
export const nextCode = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nextCode.url(args, options),
    method: 'get',
})

nextCode.definition = {
    methods: ["get","head"],
    url: '/assetkind/next-code/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetKindController::nextCode
 * @see app/Http/Controllers/AssetKindController.php:31
 * @route '/assetkind/next-code/{category}'
 */
nextCode.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    category: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        category: args.category,
                }

    return nextCode.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetKindController::nextCode
 * @see app/Http/Controllers/AssetKindController.php:31
 * @route '/assetkind/next-code/{category}'
 */
nextCode.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nextCode.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetKindController::nextCode
 * @see app/Http/Controllers/AssetKindController.php:31
 * @route '/assetkind/next-code/{category}'
 */
nextCode.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: nextCode.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetKindController::nextCode
 * @see app/Http/Controllers/AssetKindController.php:31
 * @route '/assetkind/next-code/{category}'
 */
    const nextCodeForm = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: nextCode.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetKindController::nextCode
 * @see app/Http/Controllers/AssetKindController.php:31
 * @route '/assetkind/next-code/{category}'
 */
        nextCodeForm.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: nextCode.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetKindController::nextCode
 * @see app/Http/Controllers/AssetKindController.php:31
 * @route '/assetkind/next-code/{category}'
 */
        nextCodeForm.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: nextCode.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    nextCode.form = nextCodeForm
const AssetKindController = { index, show, store, update, destroy, nextCode }

export default AssetKindController