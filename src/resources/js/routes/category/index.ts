import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AssetCategoryController::show
 * @see app/Http/Controllers/AssetCategoryController.php:51
 * @route '/category/{category}'
 */
export const show = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/category/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetCategoryController::show
 * @see app/Http/Controllers/AssetCategoryController.php:51
 * @route '/category/{category}'
 */
show.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetCategoryController::show
 * @see app/Http/Controllers/AssetCategoryController.php:51
 * @route '/category/{category}'
 */
show.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetCategoryController::show
 * @see app/Http/Controllers/AssetCategoryController.php:51
 * @route '/category/{category}'
 */
show.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetCategoryController::show
 * @see app/Http/Controllers/AssetCategoryController.php:51
 * @route '/category/{category}'
 */
    const showForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetCategoryController::show
 * @see app/Http/Controllers/AssetCategoryController.php:51
 * @route '/category/{category}'
 */
        showForm.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetCategoryController::show
 * @see app/Http/Controllers/AssetCategoryController.php:51
 * @route '/category/{category}'
 */
        showForm.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AssetCategoryController::update
 * @see app/Http/Controllers/AssetCategoryController.php:59
 * @route '/category/{assetCategory}'
 */
export const update = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/category/{assetCategory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AssetCategoryController::update
 * @see app/Http/Controllers/AssetCategoryController.php:59
 * @route '/category/{assetCategory}'
 */
update.url = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assetCategory: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { assetCategory: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    assetCategory: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        assetCategory: typeof args.assetCategory === 'object'
                ? args.assetCategory.id
                : args.assetCategory,
                }

    return update.definition.url
            .replace('{assetCategory}', parsedArgs.assetCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetCategoryController::update
 * @see app/Http/Controllers/AssetCategoryController.php:59
 * @route '/category/{assetCategory}'
 */
update.put = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\AssetCategoryController::update
 * @see app/Http/Controllers/AssetCategoryController.php:59
 * @route '/category/{assetCategory}'
 */
    const updateForm = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetCategoryController::update
 * @see app/Http/Controllers/AssetCategoryController.php:59
 * @route '/category/{assetCategory}'
 */
        updateForm.put = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AssetCategoryController::destroy
 * @see app/Http/Controllers/AssetCategoryController.php:75
 * @route '/category/{assetCategory}'
 */
export const destroy = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/category/{assetCategory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AssetCategoryController::destroy
 * @see app/Http/Controllers/AssetCategoryController.php:75
 * @route '/category/{assetCategory}'
 */
destroy.url = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assetCategory: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { assetCategory: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    assetCategory: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        assetCategory: typeof args.assetCategory === 'object'
                ? args.assetCategory.id
                : args.assetCategory,
                }

    return destroy.definition.url
            .replace('{assetCategory}', parsedArgs.assetCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetCategoryController::destroy
 * @see app/Http/Controllers/AssetCategoryController.php:75
 * @route '/category/{assetCategory}'
 */
destroy.delete = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AssetCategoryController::destroy
 * @see app/Http/Controllers/AssetCategoryController.php:75
 * @route '/category/{assetCategory}'
 */
    const destroyForm = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetCategoryController::destroy
 * @see app/Http/Controllers/AssetCategoryController.php:75
 * @route '/category/{assetCategory}'
 */
        destroyForm.delete = (args: { assetCategory: string | number | { id: string | number } } | [assetCategory: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const category = {
    show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default category