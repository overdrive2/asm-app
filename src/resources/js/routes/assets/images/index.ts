import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\AssetImageController::store
 * @see app/Http/Controllers/AssetImageController.php:15
 * @route '/assets/{asset}/images'
 */
export const store = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/assets/{asset}/images',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AssetImageController::store
 * @see app/Http/Controllers/AssetImageController.php:15
 * @route '/assets/{asset}/images'
 */
store.url = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetImageController::store
 * @see app/Http/Controllers/AssetImageController.php:15
 * @route '/assets/{asset}/images'
 */
store.post = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AssetImageController::store
 * @see app/Http/Controllers/AssetImageController.php:15
 * @route '/assets/{asset}/images'
 */
    const storeForm = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetImageController::store
 * @see app/Http/Controllers/AssetImageController.php:15
 * @route '/assets/{asset}/images'
 */
        storeForm.post = (args: { asset: string | number | { id: string | number } } | [asset: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AssetImageController::destroy
 * @see app/Http/Controllers/AssetImageController.php:87
 * @route '/assets/images/{imageId}'
 */
export const destroy = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/assets/images/{imageId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AssetImageController::destroy
 * @see app/Http/Controllers/AssetImageController.php:87
 * @route '/assets/images/{imageId}'
 */
destroy.url = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imageId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    imageId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        imageId: args.imageId,
                }

    return destroy.definition.url
            .replace('{imageId}', parsedArgs.imageId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetImageController::destroy
 * @see app/Http/Controllers/AssetImageController.php:87
 * @route '/assets/images/{imageId}'
 */
destroy.delete = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AssetImageController::destroy
 * @see app/Http/Controllers/AssetImageController.php:87
 * @route '/assets/images/{imageId}'
 */
    const destroyForm = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetImageController::destroy
 * @see app/Http/Controllers/AssetImageController.php:87
 * @route '/assets/images/{imageId}'
 */
        destroyForm.delete = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AssetImageController::updateAltText
 * @see app/Http/Controllers/AssetImageController.php:74
 * @route '/assets/images/{imageId}/alt-text'
 */
export const updateAltText = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateAltText.url(args, options),
    method: 'put',
})

updateAltText.definition = {
    methods: ["put"],
    url: '/assets/images/{imageId}/alt-text',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AssetImageController::updateAltText
 * @see app/Http/Controllers/AssetImageController.php:74
 * @route '/assets/images/{imageId}/alt-text'
 */
updateAltText.url = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { imageId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    imageId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        imageId: args.imageId,
                }

    return updateAltText.definition.url
            .replace('{imageId}', parsedArgs.imageId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetImageController::updateAltText
 * @see app/Http/Controllers/AssetImageController.php:74
 * @route '/assets/images/{imageId}/alt-text'
 */
updateAltText.put = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateAltText.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\AssetImageController::updateAltText
 * @see app/Http/Controllers/AssetImageController.php:74
 * @route '/assets/images/{imageId}/alt-text'
 */
    const updateAltTextForm = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateAltText.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetImageController::updateAltText
 * @see app/Http/Controllers/AssetImageController.php:74
 * @route '/assets/images/{imageId}/alt-text'
 */
        updateAltTextForm.put = (args: { imageId: string | number } | [imageId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateAltText.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateAltText.form = updateAltTextForm
const images = {
    store: Object.assign(store, store),
destroy: Object.assign(destroy, destroy),
updateAltText: Object.assign(updateAltText, updateAltText),
}

export default images