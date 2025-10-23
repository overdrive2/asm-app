import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import images from './images'
import qr from './qr'
/**
* @see \App\Http\Controllers\AssetController::index
 * @see app/Http/Controllers/AssetController.php:13
 * @route '/assets/{assetkind}'
 */
export const index = (args: { assetkind: string | number | { id: string | number } } | [assetkind: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/assets/{assetkind}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetController::index
 * @see app/Http/Controllers/AssetController.php:13
 * @route '/assets/{assetkind}'
 */
index.url = (args: { assetkind: string | number | { id: string | number } } | [assetkind: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assetkind: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { assetkind: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    assetkind: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        assetkind: typeof args.assetkind === 'object'
                ? args.assetkind.id
                : args.assetkind,
                }

    return index.definition.url
            .replace('{assetkind}', parsedArgs.assetkind.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::index
 * @see app/Http/Controllers/AssetController.php:13
 * @route '/assets/{assetkind}'
 */
index.get = (args: { assetkind: string | number | { id: string | number } } | [assetkind: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetController::index
 * @see app/Http/Controllers/AssetController.php:13
 * @route '/assets/{assetkind}'
 */
index.head = (args: { assetkind: string | number | { id: string | number } } | [assetkind: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetController::index
 * @see app/Http/Controllers/AssetController.php:13
 * @route '/assets/{assetkind}'
 */
    const indexForm = (args: { assetkind: string | number | { id: string | number } } | [assetkind: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetController::index
 * @see app/Http/Controllers/AssetController.php:13
 * @route '/assets/{assetkind}'
 */
        indexForm.get = (args: { assetkind: string | number | { id: string | number } } | [assetkind: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetController::index
 * @see app/Http/Controllers/AssetController.php:13
 * @route '/assets/{assetkind}'
 */
        indexForm.head = (args: { assetkind: string | number | { id: string | number } } | [assetkind: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AssetController::detail
 * @see app/Http/Controllers/AssetController.php:85
 * @route '/assets/detail/{id}'
 */
export const detail = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/assets/detail/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetController::detail
 * @see app/Http/Controllers/AssetController.php:85
 * @route '/assets/detail/{id}'
 */
detail.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return detail.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::detail
 * @see app/Http/Controllers/AssetController.php:85
 * @route '/assets/detail/{id}'
 */
detail.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetController::detail
 * @see app/Http/Controllers/AssetController.php:85
 * @route '/assets/detail/{id}'
 */
detail.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetController::detail
 * @see app/Http/Controllers/AssetController.php:85
 * @route '/assets/detail/{id}'
 */
    const detailForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: detail.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetController::detail
 * @see app/Http/Controllers/AssetController.php:85
 * @route '/assets/detail/{id}'
 */
        detailForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: detail.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetController::detail
 * @see app/Http/Controllers/AssetController.php:85
 * @route '/assets/detail/{id}'
 */
        detailForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: detail.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    detail.form = detailForm
/**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:49
 * @route '/assets'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/assets',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:49
 * @route '/assets'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:49
 * @route '/assets'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:49
 * @route '/assets'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:49
 * @route '/assets'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AssetController::show
 * @see app/Http/Controllers/AssetController.php:80
 * @route '/assets/{asset}'
 */
export const show = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/assets/{asset}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetController::show
 * @see app/Http/Controllers/AssetController.php:80
 * @route '/assets/{asset}'
 */
show.url = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { asset: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset: typeof args.asset === 'object'
                ? args.asset.id
                : args.asset,
                }

    return show.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::show
 * @see app/Http/Controllers/AssetController.php:80
 * @route '/assets/{asset}'
 */
show.get = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetController::show
 * @see app/Http/Controllers/AssetController.php:80
 * @route '/assets/{asset}'
 */
show.head = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetController::show
 * @see app/Http/Controllers/AssetController.php:80
 * @route '/assets/{asset}'
 */
    const showForm = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetController::show
 * @see app/Http/Controllers/AssetController.php:80
 * @route '/assets/{asset}'
 */
        showForm.get = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetController::show
 * @see app/Http/Controllers/AssetController.php:80
 * @route '/assets/{asset}'
 */
        showForm.head = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AssetController::edit
 * @see app/Http/Controllers/AssetController.php:66
 * @route '/assets/{asset}/edit'
 */
export const edit = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/assets/{asset}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetController::edit
 * @see app/Http/Controllers/AssetController.php:66
 * @route '/assets/{asset}/edit'
 */
edit.url = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { asset: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset: typeof args.asset === 'object'
                ? args.asset.id
                : args.asset,
                }

    return edit.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::edit
 * @see app/Http/Controllers/AssetController.php:66
 * @route '/assets/{asset}/edit'
 */
edit.get = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetController::edit
 * @see app/Http/Controllers/AssetController.php:66
 * @route '/assets/{asset}/edit'
 */
edit.head = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetController::edit
 * @see app/Http/Controllers/AssetController.php:66
 * @route '/assets/{asset}/edit'
 */
    const editForm = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetController::edit
 * @see app/Http/Controllers/AssetController.php:66
 * @route '/assets/{asset}/edit'
 */
        editForm.get = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetController::edit
 * @see app/Http/Controllers/AssetController.php:66
 * @route '/assets/{asset}/edit'
 */
        editForm.head = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:98
 * @route '/assets/{asset}'
 */
export const update = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/assets/{asset}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:98
 * @route '/assets/{asset}'
 */
update.url = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { asset: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset: typeof args.asset === 'object'
                ? args.asset.id
                : args.asset,
                }

    return update.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:98
 * @route '/assets/{asset}'
 */
update.put = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:98
 * @route '/assets/{asset}'
 */
update.patch = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:98
 * @route '/assets/{asset}'
 */
    const updateForm = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:98
 * @route '/assets/{asset}'
 */
        updateForm.put = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:98
 * @route '/assets/{asset}'
 */
        updateForm.patch = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:115
 * @route '/assets/{asset}'
 */
export const destroy = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/assets/{asset}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:115
 * @route '/assets/{asset}'
 */
destroy.url = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { asset: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset: typeof args.asset === 'object'
                ? args.asset.id
                : args.asset,
                }

    return destroy.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:115
 * @route '/assets/{asset}'
 */
destroy.delete = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:115
 * @route '/assets/{asset}'
 */
    const destroyForm = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:115
 * @route '/assets/{asset}'
 */
        destroyForm.delete = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AssetController::nextCode
 * @see app/Http/Controllers/AssetController.php:122
 * @route '/assets/next-code/{assetKind}'
 */
export const nextCode = (args: { assetKind: string | number } | [assetKind: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nextCode.url(args, options),
    method: 'get',
})

nextCode.definition = {
    methods: ["get","head"],
    url: '/assets/next-code/{assetKind}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetController::nextCode
 * @see app/Http/Controllers/AssetController.php:122
 * @route '/assets/next-code/{assetKind}'
 */
nextCode.url = (args: { assetKind: string | number } | [assetKind: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assetKind: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    assetKind: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        assetKind: args.assetKind,
                }

    return nextCode.definition.url
            .replace('{assetKind}', parsedArgs.assetKind.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::nextCode
 * @see app/Http/Controllers/AssetController.php:122
 * @route '/assets/next-code/{assetKind}'
 */
nextCode.get = (args: { assetKind: string | number } | [assetKind: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nextCode.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetController::nextCode
 * @see app/Http/Controllers/AssetController.php:122
 * @route '/assets/next-code/{assetKind}'
 */
nextCode.head = (args: { assetKind: string | number } | [assetKind: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: nextCode.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetController::nextCode
 * @see app/Http/Controllers/AssetController.php:122
 * @route '/assets/next-code/{assetKind}'
 */
    const nextCodeForm = (args: { assetKind: string | number } | [assetKind: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: nextCode.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetController::nextCode
 * @see app/Http/Controllers/AssetController.php:122
 * @route '/assets/next-code/{assetKind}'
 */
        nextCodeForm.get = (args: { assetKind: string | number } | [assetKind: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: nextCode.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetController::nextCode
 * @see app/Http/Controllers/AssetController.php:122
 * @route '/assets/next-code/{assetKind}'
 */
        nextCodeForm.head = (args: { assetKind: string | number } | [assetKind: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: nextCode.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    nextCode.form = nextCodeForm
/**
* @see \App\Http\Controllers\AssetController::nextItemCode
 * @see app/Http/Controllers/AssetController.php:132
 * @route '/assets/next-item-code/{asset}'
 */
export const nextItemCode = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nextItemCode.url(args, options),
    method: 'get',
})

nextItemCode.definition = {
    methods: ["get","head"],
    url: '/assets/next-item-code/{asset}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetController::nextItemCode
 * @see app/Http/Controllers/AssetController.php:132
 * @route '/assets/next-item-code/{asset}'
 */
nextItemCode.url = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { asset: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset: typeof args.asset === 'object'
                ? args.asset.id
                : args.asset,
                }

    return nextItemCode.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::nextItemCode
 * @see app/Http/Controllers/AssetController.php:132
 * @route '/assets/next-item-code/{asset}'
 */
nextItemCode.get = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: nextItemCode.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetController::nextItemCode
 * @see app/Http/Controllers/AssetController.php:132
 * @route '/assets/next-item-code/{asset}'
 */
nextItemCode.head = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: nextItemCode.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetController::nextItemCode
 * @see app/Http/Controllers/AssetController.php:132
 * @route '/assets/next-item-code/{asset}'
 */
    const nextItemCodeForm = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: nextItemCode.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetController::nextItemCode
 * @see app/Http/Controllers/AssetController.php:132
 * @route '/assets/next-item-code/{asset}'
 */
        nextItemCodeForm.get = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: nextItemCode.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetController::nextItemCode
 * @see app/Http/Controllers/AssetController.php:132
 * @route '/assets/next-item-code/{asset}'
 */
        nextItemCodeForm.head = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: nextItemCode.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    nextItemCode.form = nextItemCodeForm
/**
* @see \App\Http\Controllers\AssetController::generateItems
 * @see app/Http/Controllers/AssetController.php:147
 * @route '/assets/{asset}/generate-items'
 */
export const generateItems = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generateItems.url(args, options),
    method: 'post',
})

generateItems.definition = {
    methods: ["post"],
    url: '/assets/{asset}/generate-items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AssetController::generateItems
 * @see app/Http/Controllers/AssetController.php:147
 * @route '/assets/{asset}/generate-items'
 */
generateItems.url = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { asset: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset: typeof args.asset === 'object'
                ? args.asset.id
                : args.asset,
                }

    return generateItems.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::generateItems
 * @see app/Http/Controllers/AssetController.php:147
 * @route '/assets/{asset}/generate-items'
 */
generateItems.post = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: generateItems.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AssetController::generateItems
 * @see app/Http/Controllers/AssetController.php:147
 * @route '/assets/{asset}/generate-items'
 */
    const generateItemsForm = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: generateItems.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetController::generateItems
 * @see app/Http/Controllers/AssetController.php:147
 * @route '/assets/{asset}/generate-items'
 */
        generateItemsForm.post = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: generateItems.url(args, options),
            method: 'post',
        })
    
    generateItems.form = generateItemsForm
const assets = {
    images: Object.assign(images, images),
index: Object.assign(index, index),
detail: Object.assign(detail, detail),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
nextCode: Object.assign(nextCode, nextCode),
nextItemCode: Object.assign(nextItemCode, nextItemCode),
generateItems: Object.assign(generateItems, generateItems),
qr: Object.assign(qr, qr),
}

export default assets