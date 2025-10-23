import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:38
 * @route '/department'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/department',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:38
 * @route '/department'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:38
 * @route '/department'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:38
 * @route '/department'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::store
 * @see app/Http/Controllers/DepartmentController.php:38
 * @route '/department'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:51
 * @route '/department/{department}'
 */
export const show = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/department/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:51
 * @route '/department/{department}'
 */
show.url = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return show.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:51
 * @route '/department/{department}'
 */
show.get = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:51
 * @route '/department/{department}'
 */
show.head = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:51
 * @route '/department/{department}'
 */
    const showForm = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:51
 * @route '/department/{department}'
 */
        showForm.get = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::show
 * @see app/Http/Controllers/DepartmentController.php:51
 * @route '/department/{department}'
 */
        showForm.head = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:56
 * @route '/department/{department}'
 */
export const update = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/department/{department}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:56
 * @route '/department/{department}'
 */
update.url = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return update.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:56
 * @route '/department/{department}'
 */
update.put = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:56
 * @route '/department/{department}'
 */
update.patch = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:56
 * @route '/department/{department}'
 */
    const updateForm = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:56
 * @route '/department/{department}'
 */
        updateForm.put = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::update
 * @see app/Http/Controllers/DepartmentController.php:56
 * @route '/department/{department}'
 */
        updateForm.patch = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:69
 * @route '/department/{department}'
 */
export const destroy = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/department/{department}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:69
 * @route '/department/{department}'
 */
destroy.url = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { department: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    department: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        department: typeof args.department === 'object'
                ? args.department.id
                : args.department,
                }

    return destroy.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:69
 * @route '/department/{department}'
 */
destroy.delete = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:69
 * @route '/department/{department}'
 */
    const destroyForm = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::destroy
 * @see app/Http/Controllers/DepartmentController.php:69
 * @route '/department/{department}'
 */
        destroyForm.delete = (args: { department: string | number | { id: string | number } } | [department: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:11
 * @route '/departments'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:11
 * @route '/departments'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:11
 * @route '/departments'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:11
 * @route '/departments'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:11
 * @route '/departments'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:11
 * @route '/departments'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DepartmentController::index
 * @see app/Http/Controllers/DepartmentController.php:11
 * @route '/departments'
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
const DepartmentController = { store, show, update, destroy, index }

export default DepartmentController