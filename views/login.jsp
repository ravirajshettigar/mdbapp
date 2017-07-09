<div class="login-container">
    <div class="col-sm-12 well">
        <form class="form-horizontal" method="POST" action="/webapi/auth">
            <div class="row">
                <label class="col-sm-4 control-label">Username: </label>
                <div class="col-sm-8">
                    <input class="form-control" type="text" name="username" value="" />
                </div>
            </div>
            <div class="row">
                <label class="col-sm-4 control-label">Password: </label>
                <div class="col-sm-8">
                    <input class="form-control" type="password" name="password" value="" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-offset-4 col-sm-8">
                    <input type="submit" class="btn btn-primary" value="Log In" />
                </div>
            </div>
            {{#if error}}
            <div class="col-sm-offset-4 col-sm-8 alert alert-danger">
                {{ error }}
            </div>
            {{/if}}
            {{#if logout}}
            <div class="col-sm-offset-4 col-sm-8 alert alert-success">
                 {{ logout }}
            </div>
            {{/if}}
        </form>
    </div>
</div>