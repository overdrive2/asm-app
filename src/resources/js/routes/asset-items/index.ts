import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AssetItemController::update
 * @see app/Http/Controllers/AssetItemController.php:13
 * @route '/asset-items/{assetItem}'
 */
export const update = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/asset-items/{assetItem}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AssetItemController::update
 * @see app/Http/Controllers/AssetItemController.php:13
 * @route '/asset-items/{assetItem}'
 */
update.url = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assetItem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { assetItem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    assetItem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        assetItem: typeof args.assetItem === 'object'
                ? args.assetItem.id
                : args.assetItem,
                }

    return update.definition.url
            .replace('{assetItem}', parsedArgs.assetItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetItemController::update
 * @see app/Http/Controllers/AssetItemController.php:13
 * @route '/asset-items/{assetItem}'
 */
update.put = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\AssetItemController::update
 * @see app/Http/Controllers/AssetItemController.php:13
 * @route '/asset-items/{assetItem}'
 */
    const updateForm = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetItemController::update
 * @see app/Http/Controllers/AssetItemController.php:13
 * @route '/asset-items/{assetItem}'
 */
        updateForm.put = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AssetItemController::show
 * @see app/Http/Controllers/AssetItemController.php:39
 * @route '/asset-item-show/{assetItem}'
 */
export const show = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/asset-item-show/{assetItem}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetItemController::show
 * @see app/Http/Controllers/AssetItemController.php:39
 * @route '/asset-item-show/{assetItem}'
 */
show.url = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { assetItem: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { assetItem: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    assetItem: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        assetItem: typeof args.assetItem === 'object'
                ? args.assetItem.id
                : args.assetItem,
                }

    return show.definition.url
            .replace('{assetItem}', parsedArgs.assetItem.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetItemController::show
 * @see app/Http/Controllers/AssetItemController.php:39
 * @route '/asset-item-show/{assetItem}'
 */
show.get = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetItemController::show
 * @see app/Http/Controllers/AssetItemController.php:39
 * @route '/asset-item-show/{assetItem}'
 */
show.head = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetItemController::show
 * @see app/Http/Controllers/AssetItemController.php:39
 * @route '/asset-item-show/{assetItem}'
 */
    const showForm = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetItemController::show
 * @see app/Http/Controllers/AssetItemController.php:39
 * @route '/asset-item-show/{assetItem}'
 */
        showForm.get = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetItemController::show
 * @see app/Http/Controllers/AssetItemController.php:39
 * @route '/asset-item-show/{assetItem}'
 */
        showForm.head = (args: { assetItem: string | number | { id: string | number } } | [assetItem: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const assetItems = {
    update: Object.assign(update, update),
show: Object.assign(show, show),
}

export default assetItems