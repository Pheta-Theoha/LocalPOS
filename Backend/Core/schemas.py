from drf_yasg.inspectors import SwaggerAutoSchema

class TaggedSwaggerAutoSchema(SwaggerAutoSchema):
    def get_tags(self, operation_keys=None):
        tags = super().get_tags(operation_keys)
        # Customize tags based on the viewset or action
        if self.view.__class__.__name__ == 'ProductViewSet':
            return ['ProductModel']
        elif self.view.__class__.__name__ == 'TransactionViewSet':
            return ['TransactionModel']
        elif self.view.__class__.__name__ == 'UserViewSet':
            return ['UserModel']
        return tags