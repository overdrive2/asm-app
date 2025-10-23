import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\StaffController::store
 * @see app/Http/Controllers/StaffController.php:36
 * @route '/staff'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/staff',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StaffController::store
 * @see app/Http/Controllers/StaffController.php:36
 * @route '/staff'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::store
 * @see app/Http/Controllers/StaffController.php:36
 * @route '/staff'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StaffController::store
 * @see app/Http/Controllers/StaffController.php:36
 * @route '/staff'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StaffController::store
 * @see app/Http/Controllers/StaffController.php:36
 * @route '/staff'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\StaffController::show
 * @see app/Http/Controllers/StaffController.php:51
 * @route '/staff/{staff}'
 */
export const show = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/staff/{staff}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StaffController::show
 * @see app/Http/Controllers/StaffController.php:51
 * @route '/staff/{staff}'
 */
show.url = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { staff: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    staff: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        staff: typeof args.staff === 'object'
                ? args.staff.id
                : args.staff,
                }

    return show.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::show
 * @see app/Http/Controllers/StaffController.php:51
 * @route '/staff/{staff}'
 */
show.get = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StaffController::show
 * @see app/Http/Controllers/StaffController.php:51
 * @route '/staff/{staff}'
 */
show.head = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StaffController::show
 * @see app/Http/Controllers/StaffController.php:51
 * @route '/staff/{staff}'
 */
    const showForm = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StaffController::show
 * @see app/Http/Controllers/StaffController.php:51
 * @route '/staff/{staff}'
 */
        showForm.get = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StaffController::show
 * @see app/Http/Controllers/StaffController.php:51
 * @route '/staff/{staff}'
 */
        showForm.head = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StaffController::update
 * @see app/Http/Controllers/StaffController.php:56
 * @route '/staff/{staff}'
 */
export const update = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/staff/{staff}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StaffController::update
 * @see app/Http/Controllers/StaffController.php:56
 * @route '/staff/{staff}'
 */
update.url = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { staff: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    staff: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        staff: typeof args.staff === 'object'
                ? args.staff.id
                : args.staff,
                }

    return update.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::update
 * @see app/Http/Controllers/StaffController.php:56
 * @route '/staff/{staff}'
 */
update.put = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\StaffController::update
 * @see app/Http/Controllers/StaffController.php:56
 * @route '/staff/{staff}'
 */
update.patch = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\StaffController::update
 * @see app/Http/Controllers/StaffController.php:56
 * @route '/staff/{staff}'
 */
    const updateForm = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StaffController::update
 * @see app/Http/Controllers/StaffController.php:56
 * @route '/staff/{staff}'
 */
        updateForm.put = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\StaffController::update
 * @see app/Http/Controllers/StaffController.php:56
 * @route '/staff/{staff}'
 */
        updateForm.patch = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\StaffController::destroy
 * @see app/Http/Controllers/StaffController.php:71
 * @route '/staff/{staff}'
 */
export const destroy = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/staff/{staff}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StaffController::destroy
 * @see app/Http/Controllers/StaffController.php:71
 * @route '/staff/{staff}'
 */
destroy.url = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { staff: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { staff: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    staff: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        staff: typeof args.staff === 'object'
                ? args.staff.id
                : args.staff,
                }

    return destroy.definition.url
            .replace('{staff}', parsedArgs.staff.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StaffController::destroy
 * @see app/Http/Controllers/StaffController.php:71
 * @route '/staff/{staff}'
 */
destroy.delete = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\StaffController::destroy
 * @see app/Http/Controllers/StaffController.php:71
 * @route '/staff/{staff}'
 */
    const destroyForm = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StaffController::destroy
 * @see app/Http/Controllers/StaffController.php:71
 * @route '/staff/{staff}'
 */
        destroyForm.delete = (args: { staff: string | number | { id: string | number } } | [staff: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const staff = {
    store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default staff